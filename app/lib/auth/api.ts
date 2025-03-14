import { createIsomorphicFn } from '@tanstack/react-start';
import { getWebRequest } from '@tanstack/react-start/server';
import { auth } from '.';
import { QueryClient } from '@tanstack/react-query';
import { fetchUserOpts } from './client';

export const getUser = createIsomorphicFn()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .server(async (queryClient: QueryClient) => {
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
    const session = await queryClient.fetchQuery(fetchUserOpts);
    const user = session?.data?.user;
    console.log('Session retrieved', user?.email);
    return user;
  });
