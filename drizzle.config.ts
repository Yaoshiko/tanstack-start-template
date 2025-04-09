import 'dotenv/config';
import { useEnvironment } from '@/lib/environment';
import { defineConfig } from 'drizzle-kit';

const { serverEnv } = useEnvironment();

export default defineConfig({
  out: './app/db/migrations',
  schema: ['./app/db/auth-schema.ts', './app/db/schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: serverEnv!.DATABASE_URL!
  }
});
