import { createFileRoute } from '@tanstack/react-router';
import { Login } from '~/components/Login';

// TODO: Manage route guards with _authed hidden route or custom middleware(s)?

export const Route = createFileRoute('/_authed')({
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw new Error('Not authenticated');
    }
  },
  errorComponent: ({ error }) => {
    if (error.message === 'Not authenticated') {
      return <Login />;
    }

    throw error;
  }
});
