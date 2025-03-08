import { createServerFn } from '@tanstack/start';
import { getWebRequest } from '@tanstack/start/server';
import { auth } from '.';

export const getUser = createServerFn({ method: 'GET' }).handler(async () => {
  console.log('Fetching logged-in user');
  const { headers } = getWebRequest()!;
  const session = await auth.api.getSession({
    headers,
    query: {
      // Ensure session is fresh.
      // https://www.better-auth.com/docs/concepts/session-management#session-caching
      disableCookieCache: true
    }
  });
  return session?.user;
});
