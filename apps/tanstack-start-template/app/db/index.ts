import { useEnvironment } from 'app/lib/environment';
import { getDatabase } from 'drizzle-db';

const { serverEnv } = useEnvironment();
if (!serverEnv!.DB_URL) {
  throw new Error('DB_URL environment variable is not set');
}

export const db = getDatabase(serverEnv!.DB_URL);
