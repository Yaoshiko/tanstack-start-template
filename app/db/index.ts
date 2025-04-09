import { useEnvironment } from '@/lib/environment';
import { drizzle } from 'drizzle-orm/node-postgres';

const { serverEnv } = useEnvironment();

if (!serverEnv!.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set');
}

export const db = drizzle(serverEnv!.DATABASE_URL);

export * from './schema';
