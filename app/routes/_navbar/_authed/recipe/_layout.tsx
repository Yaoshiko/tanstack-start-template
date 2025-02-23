import { Link, Outlet, createFileRoute } from '@tanstack/react-router';
import { fetchRecipeTitles } from '@/api/recipes.js';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { isDeclarationStatement } from 'typescript';
import { is } from 'drizzle-orm';

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
  // FIXME: Find a better way to detect if route match is exact.
  const isDefault = Object.keys(Route.useMatch().params).length == 0;

  return (
    <div className="flex min-h-full">
      <div
        className={cn(
          'no-scrollbar border-right text-muted-foreground flex min-h-full min-w-40 grow-1 flex-col overflow-y-hidden border-r border-gray-200 sm:max-w-80',
          {
            'hidden sm:flex': !isDefault
          }
        )}
      >
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
      <div
        className={cn('grow-4 sm:flex', {
          hidden: isDefault
        })}
      >
        <div className="m-12 grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
