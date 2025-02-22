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

  return (
    <>
      <hr />
      <div className="flex gap-2 p-2">
        <ul className="list-disc pl-4">
          {recipes.map(({ id, title }) => (
            <li key={id} className="whitespace-nowrap">
              <Link
                to="/recipe/$recipeId"
                params={{
                  recipeId: id
                }}
                className="block py-1 text-blue-800 hover:text-blue-600"
                activeProps={{ className: 'text-black font-bold' }}
              >
                <div>{title}</div>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="flex flex-col gap-y-8">
          <button onClick={() => router.invalidate()}>
            Re-fetch all recipes
          </button>
          <Outlet />
        </div>
      </div>
    </>
  );
}
