import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '~/lib/components/NotFound';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { fetchTodoOpts } from '~/api/queries';

export const Route = createFileRoute('/_authed/todos/_layout/$todoId')({
  loader: ({ context, params: { todoId } }) => {
    console.log('Loader todo ', todoId);
    context.queryClient.prefetchQuery(fetchTodoOpts(todoId));
  },
  errorComponent: TodoErrorComponent,
  component: TodoComponent,
  notFoundComponent: () => {
    return <NotFound>Todo not found</NotFound>;
  }
});

function TodoErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function TodoComponent() {
  return (
    <div className="space-y-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Deferred />
      </Suspense>
    </div>
  );
}

function Deferred() {
  const { todoId } = Route.useParams();
  const todo = useSuspenseQuery(fetchTodoOpts(todoId));

  return (
    <>
      <h4 className="text-xl font-bold underline">{todo.data.id}</h4>
      <div className="text-sm">{todo.data.content}</div>
    </>
  );
}
