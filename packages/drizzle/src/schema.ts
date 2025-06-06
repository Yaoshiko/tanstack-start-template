import { uuid, pgTable, varchar, timestamp, text } from 'drizzle-orm/pg-core';
import { user } from './auth-schema';

export const recipes = pgTable('recipe', {
  id: uuid().primaryKey().defaultRandom(),
  userId: text()
    .notNull()
    .references(() => user.id),
  title: varchar({ length: 255 }).notNull(),
  content: varchar().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow()
});

export type Recipe = typeof recipes.$inferSelect;
export type RecipeInsert = typeof recipes.$inferInsert;
