import { m as createServerRpc, n as createServerFn, o as authMiddleware, r as recipeSchema, u as useLogger, s as insertRecipe, t as deleteRecipeById, p as delay, f as useEnvironment, q as getRecipeTitles, v as getRecipe } from './ssr.mjs';
import 'react/jsx-runtime';
import '@tanstack/react-router';
import '@tanstack/react-router-with-query';
import '@tanstack/react-query';
import '@tanstack/react-router-devtools';
import 'pino';
import 'next-themes';
import 'sonner';
import 'better-auth';
import 'better-auth/adapters/drizzle';
import 'drizzle-orm/node-postgres';
import 'mjml';
import 'resend';
import 'drizzle-orm/pg-core';
import 'node:async_hooks';
import '@tanstack/zod-adapter';
import 'zod';
import 'drizzle-orm';
import 'clsx';
import 'tailwind-merge';
import '@tanstack/react-router/ssr/server';

const {
  logger
} = useLogger();
const {
  serverEnv
} = useEnvironment();
const fetchRecipe_createServerFn_handler = createServerRpc("src_api_recipes_ts--fetchRecipe_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return fetchRecipe.__executeServer(opts, signal);
});
const fetchRecipeTitles_createServerFn_handler = createServerRpc("src_api_recipes_ts--fetchRecipeTitles_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return fetchRecipeTitles.__executeServer(opts, signal);
});
const createRecipe_createServerFn_handler = createServerRpc("src_api_recipes_ts--createRecipe_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return createRecipe.__executeServer(opts, signal);
});
const deleteRecipe_createServerFn_handler = createServerRpc("src_api_recipes_ts--deleteRecipe_createServerFn_handler", "/_serverFn", (opts, signal) => {
  return deleteRecipe.__executeServer(opts, signal);
});
const fetchRecipe = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).validator((recipeId) => recipeId).handler(fetchRecipe_createServerFn_handler, async ({
  context,
  data: recipeId
}) => {
  logger.info(`Fetching recipe ${recipeId} for user ${context.user.id}...`);
  await delay(serverEnv.FETCH_RECIPE_DELAY);
  return await getRecipe(context.user.id, recipeId);
});
const fetchRecipeTitles = createServerFn({
  method: "GET"
}).middleware([authMiddleware]).handler(fetchRecipeTitles_createServerFn_handler, async ({
  context
}) => {
  logger.info(`Fetching recipe titles for user ${context.user.id}...`);
  await delay(serverEnv.FETCH_RECIPES_DELAY);
  return await getRecipeTitles(context.user.id);
});
const createRecipe = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator(recipeSchema).handler(createRecipe_createServerFn_handler, async ({
  context,
  data: recipe
}) => {
  logger.info(`Creating recipe ${recipe.title} for user ${context.user.id}...`);
  return await insertRecipe(context.user.id, recipe);
});
const deleteRecipe = createServerFn({
  method: "POST"
}).middleware([authMiddleware]).validator((recipeId) => recipeId).handler(deleteRecipe_createServerFn_handler, async ({
  context,
  data: recipeId
}) => {
  logger.info(`Deleting recipe ${recipeId}`);
  await deleteRecipeById(context.user.id, recipeId);
});

export { createRecipe_createServerFn_handler, deleteRecipe_createServerFn_handler, fetchRecipeTitles_createServerFn_handler, fetchRecipe_createServerFn_handler };
//# sourceMappingURL=recipes-B7ElcmL8.mjs.map
