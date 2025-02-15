import { createFileRoute } from '@tanstack/react-router';
import { logoutFn } from '~/auth/api';

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn()
});
