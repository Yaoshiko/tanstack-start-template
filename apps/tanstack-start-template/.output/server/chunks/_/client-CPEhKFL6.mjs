import { queryOptions } from '@tanstack/react-query';
import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';
import { f as useEnvironment, u as useLogger } from './ssr.mjs';

const AUTH_QUERY_KEY = "user";
const { logger } = useLogger();
const { serverEnv } = useEnvironment();
const authClient = createAuthClient({
  baseURL: serverEnv == null ? void 0 : serverEnv.PUBLIC_BASEURL,
  plugins: [
    inferAdditionalFields({
      user: {
        firstName: {
          type: "string"
        },
        lastName: {
          type: "string"
        }
      }
    })
  ]
});
queryOptions({
  queryKey: [AUTH_QUERY_KEY],
  staleTime: 3 * 60 * 1e3,
  queryFn: () => {
    logger.info("Re-fetching session");
    return authClient.getSession({
      query: {
        disableCookieCache: false,
        disableRefresh: true
      }
    });
  }
});
async function invalidateAuthCache(router, queryClient) {
  logger.info("Invalidating auth cache");
  await queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] });
  router.invalidate();
}

export { authClient as a, invalidateAuthCache as i };
//# sourceMappingURL=client-CPEhKFL6.mjs.map
