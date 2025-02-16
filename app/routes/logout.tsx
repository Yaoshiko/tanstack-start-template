import { createFileRoute } from '@tanstack/react-router';
import { logoutFn } from '~/lib/auth/api';

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn()
});
