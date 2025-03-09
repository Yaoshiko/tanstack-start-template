import { createServerFn } from '@tanstack/start';
import { getRecipeTitles, getRecipe } from '@/db/queries';
import { authMiddleware } from '@/lib/auth/middleware';
import { delay } from '@/lib/utils';
import { recipeSchema } from '@/lib/validators/recipe';
import { insertRecipe } from '@/db/mutations';

// TODO: Check on createIsomophicFn.

export const fetchRecipe = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .validator((recipeId: string) => recipeId)
  .handler(async ({ context, data: recipeId }) => {
    console.info(`Fetching recipe ${recipeId} for user ${context.user.id}...`);
    await delay(process.env.FETCH_RECIPE_DELAY);
    return await getRecipe(context.user.id, recipeId);
  });

export const fetchRecipeTitles = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    console.log(`Fetching recipe titles for user ${context.user.id}...`);
    await delay(process.env.FETCH_RECIPES_DELAY);
    return await getRecipeTitles(context.user.id);
  });

export const createRecipe = createServerFn({ method: 'POST' })
  .middleware([authMiddleware])
  .validator(recipeSchema)
  .handler(async ({ context, data: recipe }) => {
    console.log(
      `Creating recipe ${recipe.title} for user ${context.user.id}...`
    );
    return await insertRecipe(context.user.id, recipe);
  });
