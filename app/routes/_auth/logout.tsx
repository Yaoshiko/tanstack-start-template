import { createFileRoute } from '@tanstack/react-router';
import { logoutFn } from '@/lib/auth/api';

// FIXME: Do we need this?
export const Route = createFileRoute('/_auth/logout')({
  preload: false,
  loader: () => logoutFn()
});
