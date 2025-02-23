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
  const recipes = Route.useLoaderData();

  // TODO: Show only sidebar when on mobile (to let him select one)
  return (
    <>
      <div className="flex min-h-full">
        <div className="no-scrollbar border-right text-muted-foreground flex min-h-full flex-col overflow-y-hidden border-r border-gray-200 lg:w-80">
          {recipes.map(({ id, title }) => (
            <Link
              key={id}
              className="hover:bg-muted hover:text-accent-foreground items-center px-4 py-2 whitespace-nowrap"
              to="/recipe/$recipeId"
              params={{
                recipeId: id
              }}
              activeProps={{
                className: 'text-accent-foreground font-bold bg-muted'
              }}
            >
              {title}
            </Link>
          ))}
        </div>
        <hr className="h-full" />
        <div className="m-12 grow">
          <Outlet />
        </div>
      </div>
    </>
  );
}
