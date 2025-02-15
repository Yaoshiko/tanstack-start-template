import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { fetchTodoById } from '~/api/todos.js';

export const Route = createFileRoute('/_authed/todos/$todoId')({
  loader: ({ params: { todoId } }) => fetchTodoById({ data: todoId }),
  errorComponent: PostErrorComponent,
  component: PostComponent,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>;
  }
});

export function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function PostComponent() {
  const todo = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{todo.id}</h4>
      <div className="text-sm">{todo.content}</div>
    </div>
  );
}
