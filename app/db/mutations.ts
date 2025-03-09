import { setResponseStatus } from '@tanstack/react-start/server';
import { db } from '.';
import { recipes, RecipeInsert } from './schema';
import { eq } from 'drizzle-orm';

export async function insertRecipe(
  userId: string,
  recipeInsert: Omit<RecipeInsert, 'userId'>
) {
  return (
    await db
      .insert(recipes)
      .values({ userId, ...recipeInsert })
      .returning()
  )[0];
}

export async function deleteRecipeById(userId: string, recipeId: string) {
  const recipe = (
    await db.select().from(recipes).where(eq(recipes.id, recipeId))
  )[0];
  if (!recipe) {
    setResponseStatus(404);
    throw new Error('Recipe not found');
  }
  if (recipe.userId != userId) {
    setResponseStatus(401);
    throw new Error('Unauthorized');
  }
  await db.delete(recipes).where(eq(recipes.id, recipeId));
}
