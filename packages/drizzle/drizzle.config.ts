// eslint-disable-next-line import/no-unresolved
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

const db_url = `postgres://${process.env!.DB_USER}:${process.env!.DB_PASSWORD}@${process.env!.DB_HOST}:${process.env!.DB_PORT}/${process.env!.DB_NAME}`;

export default defineConfig({
  out: './migrations',
  schema: ['./src/auth-schema.ts', './src/schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: db_url
  }
});

console.log('Drizzle config loaded');
