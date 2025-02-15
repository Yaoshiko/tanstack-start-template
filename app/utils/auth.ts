import { createServerFn } from '@tanstack/start';
import crypto from 'node:crypto';
import { useAppSession } from './session';
import { redirect } from '@tanstack/react-router';
import { db, users } from '~/db';
import { eq } from 'drizzle-orm';
import { z } from 'vinxi';

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
