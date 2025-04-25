import { drizzle } from 'drizzle-orm/node-postgres';

export function getDatabase(dbUrl: string) {
  return drizzle(dbUrl);
}

export * as appSchema from './schema';
export * as authSchema from './auth-schema';
