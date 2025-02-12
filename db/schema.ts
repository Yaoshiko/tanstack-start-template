import { uuid, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  email: varchar({ length: 255 }).notNull().unique(),

  updatedAt: timestamp('timestamptz').notNull().defaultNow(),
  createdAt: timestamp('timestamptz').notNull().defaultNow()
});
