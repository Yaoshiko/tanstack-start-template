import { eq } from 'drizzle-orm';
import { db, todos } from './index';

export async function getUser() {
  throw new Error('Not implemented');
}

export function getTodos() {
  // TODO: Add filter by userId.
  return db.select().from(todos).orderBy(todos.createdAt);
}

export async function getTodoById(todoId: string) {
  // TODO: Add filter by userId.
  return (await db.select().from(todos).where(eq(todos.id, todoId)))[0]!;
}
