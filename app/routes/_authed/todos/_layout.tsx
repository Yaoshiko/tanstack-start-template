import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchTodos } from '~/api/todos.js';
import { Todo } from '~/db';

export const Route = createFileRoute('/_authed/todos/_layout')({
  // staleTime: 30_000,
  loader: async () => {
    console.log('Outer loader');
    return await fetchTodos();
  },
  component: TodosComponent
});

function TodosComponent() {
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
      <Outlet />
    </div>
  );
}
