import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/_authed')({
  beforeLoad: ({ context, location }) => {
    // TODO: Throw or redirect directly if not authenticated.
    if (!context.user) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href }
      });
    }

    return context;
  }
});
