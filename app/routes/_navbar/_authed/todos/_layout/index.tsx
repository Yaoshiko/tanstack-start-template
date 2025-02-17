import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/_authed/todos/_layout/')({
  component: () => <div>Select a todo.</div>
});
