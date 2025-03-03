import { createFileRoute } from '@tanstack/react-router';

// FIXME: Do we need this?
export const Route = createFileRoute('/_auth/logout')({
  preload: false
  //loader: () => logoutFn()
});
