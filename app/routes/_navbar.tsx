import {
  Link,
  Outlet,
  createRootRouteWithContext
} from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: RootComponent
  }
);

function RootComponent() {
  const { user } = Route.useRouteContext();

  return (
    <>
      <div className="flex gap-2 p-2 text-lg">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold'
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/todos"
          activeProps={{
            className: 'font-bold'
          }}
        >
          Todos
        </Link>
        <div className="ml-auto">
          {user ? (
            <>
              <span className="mr-2">{user.email}</span>
              <Link to="/logout">Logout</Link>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
      <hr />
      <Outlet />
    </>
  );
}
