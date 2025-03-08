import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import * as authSchema from '@/db/auth-schema';
import { getWebRequest } from '@tanstack/start/server';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: authSchema
  }),
  emailAndPassword: {
    enabled: true
  },
  cookieCache: {
    enabled: true,
    maxAge: 5 * 60 // Cache duration in seconds.
  }
});

export const getLoggedUser = async () => {
  const { headers } = getWebRequest()!;
  const session = await auth.api.getSession({
    headers,
    query: {
      // Ensure session is fresh.
      // https://www.better-auth.com/docs/concepts/session-management#session-caching
      disableCookieCache: true
    }
  });
  return session?.user;
};
