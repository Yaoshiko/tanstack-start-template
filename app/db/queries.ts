import { and, eq } from 'drizzle-orm';
import { db, recipe } from './index';

export function getRecipeTitles(userId: string) {
  return db
    .select({ id: recipe.id, title: recipe.title })
    .from(recipe)
    .where(eq(recipe.userId, userId))
    .orderBy(recipe.createdAt);
}

export async function getRecipe(userId: string, recipeId: string) {
  return (
    await db
      .select()
      .from(recipe)
      .where(and(eq(recipe.userId, userId), eq(recipe.id, recipeId)))
  )[0]!;
}
