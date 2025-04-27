// eslint-disable-next-line import/no-unresolved
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { execSync } from 'child_process';

const DB_USER = process.env!.DB_USER;
const DB_PASSWORD = process.env!.DB_PASSWORD;
const DB_HOST = process.env!.DB_HOST;
const DB_PORT = process.env!.DB_PORT;
const DB_NAME = process.env!.DB_NAME;

const db_url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

try {
  console.log(`Checking if ${DB_HOST}:${DB_PORT} is reachable...`);
  execSync(
    `timeout 60 bash -c "until echo > /dev/tcp/${DB_HOST}/${DB_PORT}; do sleep 1; done"`
  );
  console.log(`${DB_HOST}:${DB_PORT} is reachable.`);
} catch (error) {
  console.error(`Failed to connect to ${DB_HOST}:${DB_PORT} within 1 minute.`);
  process.exit(1);
}

export default defineConfig({
  out: './migrations',
  schema: ['./src/auth-schema.ts', './src/schema.ts'],
  dialect: 'postgresql',
  dbCredentials: {
    url: db_url
  }
});

console.log('Drizzle config loaded');
