// app/api.ts
import {
  createStartAPIHandler,
  defaultAPIFileRouteHandler
} from '@tanstack/react-start/api';

import dotenv from 'dotenv';
import fs from 'fs';

// Load base .env first.
dotenv.config();

// Then optionally override with secrets.
if (fs.existsSync('.env.secrets')) {
  dotenv.config({ path: '.env.secrets', override: true });
}

export default createStartAPIHandler(defaultAPIFileRouteHandler);
