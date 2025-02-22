import {
  Link,
  Outlet,
  createFileRoute,
  useRouter
} from '@tanstack/react-router';
import { fetchRecipeTitles } from '@/api/recipes.js';

export const Route = createFileRoute('/_navbar/_authed/recipe/_layout')({
  staleTime: 30_000, // Prevent refetching all recipes at every route load.
  loader: async () => {
    console.log('Loading all recipes...');
    return await fetchRecipeTitles();
  },
  component: RecipesComponent
});

function RecipesComponent() {
  const router = useRouter();
  const recipes = Route.useLoaderData();

  // TODO: Show only sidebar when on mobile (to let him select one)
  return (
    <>
      <hr />
      <div className="flex h-full">
        <div className="border-right flex h-full w-48 flex-col border-r border-gray-200">
          {recipes.map(({ id, title }) => (
            <Link
              key={id}
              className="items-center px-4 py-2 whitespace-nowrap hover:bg-slate-100"
              to="/recipe/$recipeId"
              params={{
                recipeId: id
              }}
              activeProps={{
                className: 'text-black font-bold bg-slate-50'
              }}
            >
              {title}
            </Link>
          ))}
        </div>
        <hr />
        <div className="m-12">
          <Outlet />
        </div>
      </div>
    </>
  );
}
