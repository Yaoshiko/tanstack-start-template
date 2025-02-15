import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/todos/')({
  component: PostsIndexComponent
});

function PostsIndexComponent() {
  return <div>Select a post.</div>;
}
