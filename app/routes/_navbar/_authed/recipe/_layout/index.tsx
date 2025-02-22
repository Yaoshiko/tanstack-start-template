import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/_authed/recipe/_layout/')({
  component: () => <div>Select a todo.</div>
});
