// eslint-disable-next-line import/no-unresolved
import 'dotenv/config';
import { execSync } from 'child_process';

const DB_HOST = process.env!.DB_HOST;
const DB_PORT = process.env!.DB_PORT;

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

console.log('Database ready');
