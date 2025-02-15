import { createServerFn } from '@tanstack/start';
import crypto from 'node:crypto';
import { redirect } from '@tanstack/react-router';
import { db, users } from '~/db';
import { eq } from 'drizzle-orm';
import { z } from 'vinxi';
import { useAppSession } from './session';

// TODO: Refactor auth APIs and middleware with BetterAuth.
//       https://www.better-auth.com/

export const logoutFn = createServerFn().handler(async () => {
  const session = await useAppSession();

  session.clear();

  throw redirect({
    href: '/'
  });
});

export const fetchUser = createServerFn({ method: 'GET' }).handler(async () => {
  // We need to auth on the server so we have access to secure cookies
  const session = await useAppSession();

  if (!session.data.userEmail) {
    return null;
  }

  return {
    email: session.data.userEmail
  };
});

export const loginFn = createServerFn()
  .validator((d: unknown) => d as { email: string; password: string })
  .handler(async ({ data }) => {
    // Find the user
    const user = (
      await db.select().from(users).where(eq(users.email, data.email)).limit(1)
    )[0]!;

    // Check if the user exists
    if (!user) {
      return {
        error: true,
        userNotFound: true,
        message: 'User not found'
      };
    }

    // Check if the password is correct
    const hashedPassword = await hashPassword(data.password);

    if (user.password !== hashedPassword) {
      return {
        error: true,
        message: 'Incorrect password'
      };
    }

    // Create a session
    const session = await useAppSession();

    // Store the user's email in the session
    await session.update({
      userEmail: user.email
    });
  });

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  redirectUrl: z.string().optional()
});

export const signupFn = createServerFn()
  .validator(signupSchema)
  .handler(async ({ data }) => {
    // Check if the user already exists.
    const existingUser = (
      await db.select().from(users).where(eq(users.email, data.email)).limit(1)
    )[0]!;

    // Encrypt the password using sha-256 into plaintext.
    const password = await hashPassword(data.password);

    // Create a session.
    const session = await useAppSession();

    if (existingUser) {
      if (existingUser.password !== password) {
        return {
          error: true,
          userExists: true,
          message: 'User already exists'
        };
      }

      // Store the user's email in the session.
      await session.update({
        userEmail: existingUser.email
      });

      // Redirect to the prev page stored in the "redirect" search param.
      throw redirect({
        href: data.redirectUrl || '/'
      });
    }

    // Create the user.
    const user = (
      await db
        .insert(users)
        .values({
          email: data.email,
          password
        })
        .returning()
    )[0]!;

    // Store the user's email in the session.
    await session.update({
      userEmail: user.email
    });

    // Redirect to the prev page stored in the "redirect" search param.
    throw redirect({
      href: data.redirectUrl || '/'
    });
  });

function hashPassword(password: string) {
  return new Promise<string>((resolve, reject) => {
    crypto.pbkdf2(password, 'salt', 100000, 64, 'sha256', (err, derivedKey) => {
      if (err) {
        reject(err);
      } else {
        resolve(derivedKey.toString('hex'));
      }
    });
  });
}
