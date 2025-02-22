import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/about')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>TODO: Hero page to explain who and why</div>;
}
