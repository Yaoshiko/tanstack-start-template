import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),

  updatedAt: timestamp().notNull().defaultNow(),
  createdAt: timestamp().notNull().defaultNow()
});

export const todos = pgTable('todos', {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid()
    .notNull()
    .references(() => users.id),
  content: varchar({ length: 255 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow()
});

export type User = typeof users.$inferSelect;
export type Todo = typeof todos.$inferSelect;
