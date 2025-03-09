import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import * as authSchema from '@/db/auth-schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: authSchema
  }),
  emailAndPassword: {
    enabled: true
  },
  session: {
    freshAge: process.env.BETTER_AUTH_COOKIE_CACHE,
    cookieCache: {
      enabled: true,
      maxAge: process.env.BETTER_AUTH_COOKIE_CACHE
    }
  },
  cookieCache: {
    enabled: true,
    maxAge: process.env.BETTER_AUTH_COOKIE_CACHE
  }
});
