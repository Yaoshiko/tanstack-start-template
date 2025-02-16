import {
  Link,
  Outlet,
  createFileRoute,
  useRouter
} from '@tanstack/react-router';
import { fetchTodos } from '~/api/todos.js';
import { Todo } from '~/db';

export const Route = createFileRoute('/_authed/todos/_layout')({
  staleTime: 30_000, // Prevent refetching all todos at every route load.
  loader: async () => {
    console.log('Loading all todos...');
    return await fetchTodos();
  },
  component: TodosComponent
});

function TodosComponent() {
  const router = useRouter();
  const todos = Route.useLoaderData();

  return (
    <div className="flex gap-2 p-2">
      <ul className="list-disc pl-4">
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id} className="whitespace-nowrap">
              <Link
                to="/todos/$todoId"
                params={{
                  todoId: todo.id
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: 'text-black font-bold' }}
              >
                <div>{todo.content.substring(0, 20)}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="flex flex-col gap-y-8">
        <button onClick={() => router.invalidate()}>Re-fetch all todos</button>
        <Outlet />
      </div>
    </div>
  );
}
