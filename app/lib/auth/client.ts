import { QueryClient, queryOptions } from '@tanstack/react-query';
import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { RegisteredRouter } from '@tanstack/react-router';

const AUTH_QUERY_KEY = 'user';

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [
    inferAdditionalFields({
      user: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        }
      }
    })
  ]
});

export const fetchUserOpts = queryOptions({
  queryKey: [AUTH_QUERY_KEY],
  staleTime: 3 * 60 * 1000,
  queryFn: () => {
    console.log('Re-fetching session');
    return authClient.getSession({
      query: {
        disableCookieCache: false,
        disableRefresh: true
      }
    });
  }
});

// TODO: Export better APIs (signIn, signOut, ...) to hide the cache implementation.
export async function invalidateAuthCache(
  router: RegisteredRouter,
  queryClient: QueryClient
) {
  console.log('Invalidating auth cache');
  // Ensure cached data is invalidated.
  await queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
  router.invalidate();
}
