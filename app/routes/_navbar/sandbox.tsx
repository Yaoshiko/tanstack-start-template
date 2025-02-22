import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_navbar/about copy')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div>
      TODO: Sidebar (https://ui.shadcn.com/blocks/sidebar) to showcase different
      UI components or UX patterns
    </div>
  );
}
