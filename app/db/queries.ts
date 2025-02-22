import { eq } from 'drizzle-orm';
import { db, recipe } from './index';

export function getRecipeTitles() {
  // TODO: Add filter by userId.
  return db
    .select({ id: recipe.id, title: recipe.title })
    .from(recipe)
    .orderBy(recipe.createdAt);
}

export async function getRecipe(recipeId: string) {
  // TODO: Add filter by userId.
  return (await db.select().from(recipe).where(eq(recipe.id, recipeId)))[0]!;
}
