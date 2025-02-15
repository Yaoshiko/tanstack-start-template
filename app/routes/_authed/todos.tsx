import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchTodos } from '~/api/todos.js';

export const Route = createFileRoute('/_authed/todos')({
  loader: () => fetchTodos(),
  component: PostsComponent
});

function PostsComponent() {
  const todos = Route.useLoaderData();
  console.log(todos);

  return (
    <div className="flex gap-2 p-2">
      <ul className="list-disc pl-4">
        {todos.map((todo) => {
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
