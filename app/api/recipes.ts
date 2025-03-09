import { createServerFn } from '@tanstack/start';
import { getRecipeTitles, getRecipe } from '@/db/queries';
import { authMiddleware } from '@/lib/auth/middleware';

// TODO: Add auth middleware and pass userId to data-layer APIs.
// TODO: Check on createIsomophicFn.

export const fetchRecipe = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .validator((recipeId: string) => recipeId)
  .handler(async ({ context, data: recipeId }) => {
    console.info(`Fetching recipe ${recipeId} for user ${context.user.id}...`);
    await delay(process.env.FETCH_RECIPE_DELAY);
    return await getRecipe(recipeId);
  });

export const fetchRecipeTitles = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    console.log(`Fetching recipe titles for user ${context.user.id}...`);
    await delay(process.env.FETCH_RECIPES_DELAY);
    return await getRecipeTitles();
  });

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
