import { ErrorComponent, createFileRoute } from '@tanstack/react-router';
import type { ErrorComponentProps } from '@tanstack/react-router';
import { NotFound } from '@/components/not-found';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { fetchRecipeOpts } from '@/api/queries';

export const Route = createFileRoute(
  '/_navbar/_authed/recipe/_sidebar/$recipeId'
)({
  loader: ({ context, params: { recipeId } }) => {
    console.log('Loader recipe ', recipeId);
    context.queryClient.prefetchQuery(fetchRecipeOpts(recipeId));
  },
  errorComponent: RecipeErrorComponent,
  component: RecipeComponent,
  notFoundComponent: () => {
    return <NotFound>Recipe not found</NotFound>;
  }
});

function RecipeErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />;
}

function RecipeComponent() {
  return (
    <div className="space-y-2">
      <Suspense fallback={<div>Loading...</div>}>
        <Deferred />
      </Suspense>
    </div>
  );
}

function Deferred() {
  const { recipeId } = Route.useParams();
  const recipe = useSuspenseQuery(fetchRecipeOpts(recipeId));

  return (
    <>
      <h4 className="text-xl font-bold underline">{recipe.data.title}</h4>
      <div className="text-sm">{recipe.data.content}</div>
    </>
  );
}
