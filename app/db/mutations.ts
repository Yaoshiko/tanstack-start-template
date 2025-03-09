import { db } from '.';
import { recipe, RecipeInsert } from './schema';

export async function insertRecipe(
  userId: string,
  recipeInsert: Omit<RecipeInsert, 'userId'>
) {
  return (
    await db
      .insert(recipe)
      .values({ userId, ...recipeInsert })
      .returning()
  )[0];
}
