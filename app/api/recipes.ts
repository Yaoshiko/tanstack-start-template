import { createServerFn } from '@tanstack/start';
import { getRecipeTitles, getRecipe } from '@/db/queries';

// TODO: Add auth middleware and pass userId to data-layer APIs.
// TODO: Check on createIsomophicFn.

export const fetchRecipe = createServerFn({ method: 'GET' })
  .validator((recipeId: string) => recipeId)
  .handler(async ({ data: recipeId }) => {
    console.info(`Fetching recipe ${recipeId}...`);
    await delay(process.env.FETCH_RECIPE_DELAY);
    return await getRecipe(recipeId);
  });

export const fetchRecipeTitles = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.log('Fetching recipe titles...');
    await delay(process.env.FETCH_RECIPES_DELAY);
    return await getRecipeTitles();
  }
);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
