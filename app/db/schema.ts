import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),

  updatedAt: timestamp().notNull().defaultNow(),
  createdAt: timestamp().notNull().defaultNow()
});
