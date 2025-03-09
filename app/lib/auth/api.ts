import { createIsomorphicFn } from '@tanstack/start';
import { getWebRequest } from '@tanstack/start/server';
import { auth } from '.';
import { QueryClient } from '@tanstack/react-query';
import { fetchUserOpts } from './client';

export const getUser = createIsomorphicFn()
  .server(async () => {
    console.debug('Fetching logged-in user');
    const { headers } = getWebRequest()!;
    const session = await auth.api.getSession({
      headers,
      query: {
        disableCookieCache: false
      }
    });
    const user = session?.user;
    console.log('Fetched logged-in user', user?.email);
    return user;
  })
  // FIXME: Fix type error.
  .client(async (queryClient: QueryClient) => {
    console.debug('Fetching logged-in user on client');
    const session = await queryClient.fetchQuery(fetchUserOpts);
    const user = session?.data?.user;
    console.log('Fetched logged-in user on client', user?.email);
    return user;
  });
