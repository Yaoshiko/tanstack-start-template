import { createMiddleware } from '@tanstack/start';
import { setResponseStatus } from '@tanstack/start/server';
import { getLoggedUser } from '.';

/**
 * Middleware to force authentication on a server function, and add the user to the context.
 */
export const authMiddleware = createMiddleware().server(async ({ next }) => {
  const user = await getLoggedUser();
  if (!user) {
    setResponseStatus(401);
    throw new Error('Unauthorized');
  }

  return next({ context: { user: user } });
});
