import { createMiddleware } from '@tanstack/start';

export const authMiddleware = createMiddleware().server(
  async ({ next, data, context }) => {
    // FIXME: I could pass the required role/other context info from the previous middleware.
    console.debug('Verifying auth request', data, context);

    // TODO: Check if the user is authenticated. If not, redirect to login page or just to an unauthorized one.
    return await next();
  }
);
