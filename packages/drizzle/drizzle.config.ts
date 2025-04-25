// eslint-disable-next-line import/no-unresolved
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: ['./src/auth-schema.ts', './src/schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL!
  }
});
