import { and, eq } from 'drizzle-orm';
import { db, recipes } from './index';

export function getRecipeTitles(userId: string) {
  return db
    .select({ id: recipes.id, title: recipes.title })
    .from(recipes)
    .where(eq(recipes.userId, userId))
    .orderBy(recipes.createdAt);
}

export async function getRecipe(userId: string, recipeId: string) {
  return (
    await db
      .select()
      .from(recipes)
      .where(and(eq(recipes.userId, userId), eq(recipes.id, recipeId)))
  )[0]!;
}
