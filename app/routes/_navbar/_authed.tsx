import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/_authed')({
  beforeLoad: ({ context }) => {
    // TODO: Throw or redirect directly if not authenticated.
    // if (!context.user) {
    //   throw new Error('Not authenticated');
    // }
  },
  errorComponent: ({ error }) => {
    // TODO: Redirect to login page.
    // if (error.message === 'Not authenticated') {
    //   return <Login />;
    // }

    throw error;
  }
});
