import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/about copy')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      TODO: <a href="https://ui.shadcn.com/blocks/sidebar">Sidebar</a> to
      showcase different UI components or UX patterns
    </div>
  );
}
