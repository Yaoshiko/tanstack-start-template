import { createFileRoute } from '@tanstack/react-router';
import { logoutFn } from '~/api/auth';

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn()
});
