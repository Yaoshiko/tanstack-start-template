// eslint-disable-next-line import/no-unresolved
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const DB_USER = process.env!.DB_USER;
const DB_PASSWORD = process.env!.DB_PASSWORD;
const DB_HOST = process.env!.DB_HOST;
const DB_PORT = process.env!.DB_PORT;
const DB_NAME = process.env!.DB_NAME;

export function getDatabaseUrl() {
  return `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

export default defineConfig({
  out: './migrations',
  schema: ['./src/auth-schema.ts', './src/schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: getDatabaseUrl()
  }
});
