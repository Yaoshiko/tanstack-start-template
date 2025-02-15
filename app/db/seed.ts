import * as schema from './schema';
import { db } from './index';
import { reset, seed } from 'drizzle-seed';
import { eq } from 'drizzle-orm';

const SEED = 11;

async function main() {
  console.log('Resetting database...');
  await reset(db, schema);

  console.log('Randomly seeding database...');
  await seed(db, schema, { seed: SEED }).refine((ctx) => ({
    users: {
      count: 10,
      with: {
        todos: 5
      }
    },
    todos: {
      columns: {
        content: ctx.loremIpsum()
      }
    }
  }));

  console.log('Applying custom seeding...');
  const user = (await db.select().from(schema.users).limit(1))[0]!;
  await db
    .update(schema.users)
    .set({
      email: 'nicola.barletta@outlook.it',
      password: 'password'
    })
    .where(eq(schema.users.id, user.id));

  console.log('Database seeding completed!');
}

main();
