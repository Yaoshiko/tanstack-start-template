// Collection of react-query options.

import { queryOptions } from '@tanstack/react-query';
import { fetchRecipe } from './recipes';

export function fetchRecipeOpts(recipeId: string) {
  return queryOptions({
    queryKey: ['recipeId', recipeId],
    queryFn: () => fetchRecipe({ data: recipeId })
  });
}
