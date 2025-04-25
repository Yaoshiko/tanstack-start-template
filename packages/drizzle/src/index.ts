import { useEnvironment } from '@/lib/environment';
import { drizzle } from 'drizzle-orm/node-postgres';

const { serverEnv } = useEnvironment();

if (!serverEnv!.DB_URL) {
  throw new Error('DB_URL environment variable is not set');
}

export const db = drizzle(serverEnv!.DB_URL);

export * from './schema';
