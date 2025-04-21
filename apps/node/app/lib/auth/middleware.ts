import { createMiddleware } from '@tanstack/react-start';
import { setResponseStatus } from '@tanstack/react-start/server';
import { getUser } from './api';

/**
 * Middleware to force authentication on a server function, and add the user to the context.
 */
export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const user = await getUser();
  if (!user) {
    setResponseStatus(401);
    throw new Error('Unauthorized');
  }

  return next({ context: { user: user } });
});
