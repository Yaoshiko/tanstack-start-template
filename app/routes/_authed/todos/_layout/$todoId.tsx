import {
  ErrorComponent,
  createFileRoute,
  useParams
} from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '~/components/NotFound';
import { fetchTodoById } from '~/api/todos.js';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useServerFn } from '@tanstack/start';

function getQueryOptions(todoId: string, fn) {
  return queryOptions({
    queryKey: ['todo', todoId],
    queryFn: () => fn({ data: todoId })
  });
}

export const Route = createFileRoute('/_authed/todos/_layout/$todoId')({
  loader: ({ context, params: { todoId } }) => {
    console.log('Inner loader', todoId);
    context.queryClient.prefetchQuery(getQueryOptions(todoId, fetchTodoById));
  },
  errorComponent: TodoErrorComponent,
  component: TodoComponent,
  notFoundComponent: () => {
    return <NotFound>Todo not found</NotFound>;
  }
});

export function TodoErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function TodoComponent() {
  const todo = Route.useLoaderData();
  console.log('here', todo);

  return (
    <div className="space-y-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Deferred />
      </Suspense>
    </div>
  );
}

function Deferred() {
  const { todoId } = useParams({});
  const todo = useSuspenseQuery(
    getQueryOptions(todoId, useServerFn(fetchTodoById))
  );
  console.log(todo);

  return (
    <>
      <h4 className="text-xl font-bold underline">{todo.data.id}</h4>
      <div className="text-sm">{todo.data.content}</div>
    </>
  );
}
