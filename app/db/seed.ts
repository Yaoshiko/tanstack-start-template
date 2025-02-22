import * as apiSchema from './schema';
import * as authSchema from './auth-schema';
import { db } from './index';
import { reset, seed } from 'drizzle-seed';
import { eq } from 'drizzle-orm';

const SEED = 11;

// Recipes kindly provided by AI, no blame.
const AI_RECIPES = [
  {
    title: 'Carbonara',
    content:
      "Boil water and cook pasta; cook guanciale; mix eggs and cheese; combine all with pasta and season. Please, just don't put the cream on it. Please."
  },
  {
    title: 'Amatriciana',
    content: 'Fry guanciale pieces and add tomato sauce.'
  },
  {
    title: 'Pancake',
    content:
      'Mix ingredients; heat pan with butter; cook batter on both sides until golden.'
  },
  {
    title: 'Pizza',
    content:
      'Preheat oven; roll dough; add sauce, cheese, toppings; bake until done.'
  },
  {
    title: 'Lasagna',
    content:
      'Preheat oven; cook beef and onion; layer with pasta and cheese; bake and cool.'
  },
  {
    title: 'Tiramisu',
    content:
      'Make coffee; cream yolks and sugar; add mascarpone; layer with ladyfingers; refrigerate.'
  },
  {
    title: 'Bruschetta',
    content:
      'Toast bread; rub with garlic; top with tomatoes, basil, olive oil; season and serve.'
  }
];

async function main() {
  const schema = { ...authSchema, ...apiSchema };
  console.log('Resetting database...');
  await reset(db, schema);

  console.log('Randomly seeding database...');
  await seed(db, schema, { seed: SEED });

  console.log('Adding recipes...');
  await Promise.all(
    (await db.select().from(apiSchema.recipe)).map(async (recipe, idx) => {
      const ai_recipe = AI_RECIPES[idx % AI_RECIPES.length];
      await db
        .update(apiSchema.recipe)
        .set({
          title: ai_recipe.title,
          content: ai_recipe.content
        })
        .where(eq(apiSchema.recipe.id, recipe.id));
    })
  );

  console.log('Database seeding completed!');
}

main();
