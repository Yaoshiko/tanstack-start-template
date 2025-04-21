import { createServerFn } from '@tanstack/react-start';
import { getRecipeTitles, getRecipe } from '@/db/queries';
import { authMiddleware } from '@/lib/auth/middleware';
import { delay } from '@/lib/utils';
import { recipeSchema } from '@/lib/validators/recipe';
import { deleteRecipeById, insertRecipe } from '@/db/mutations';
import { useLogger } from '@/lib/logger';
import { useEnvironment } from '@/lib/environment';

const { logger } = useLogger();
const { serverEnv } = useEnvironment();

// TODO: Check on createIsomophicFn.

export const fetchRecipe = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .validator((recipeId: string) => recipeId)
  .handler(async ({ context, data: recipeId }) => {
    logger.info(`Fetching recipe ${recipeId} for user ${context.user.id}...`);
    await delay(serverEnv!.FETCH_RECIPE_DELAY);
    return await getRecipe(context.user.id, recipeId);
  });

export const fetchRecipeTitles = createServerFn({ method: 'GET' })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    logger.info(`Fetching recipe titles for user ${context.user.id}...`);
    await delay(serverEnv!.FETCH_RECIPES_DELAY);
    return await getRecipeTitles(context.user.id);
  });

export const createRecipe = createServerFn({ method: 'POST' })
  .middleware([authMiddleware])
  .validator(recipeSchema)
  .handler(async ({ context, data: recipe }) => {
    logger.info(
      `Creating recipe ${recipe.title} for user ${context.user.id}...`
    );
    return await insertRecipe(context.user.id, recipe);
  });

export const deleteRecipe = createServerFn({ method: 'POST' })
  .middleware([authMiddleware])
  .validator((recipeId: string) => recipeId)
  .handler(async ({ context, data: recipeId }) => {
    logger.info(`Deleting recipe ${recipeId}`);
    await deleteRecipeById(context.user.id, recipeId);
  });
