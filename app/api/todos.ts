import { createServerFn } from '@tanstack/start';
import { getTodoById, getTodos } from '@/db/queries';

// TODO: Add auth middleware and pass userId to data-layer APIs.

export const fetchTodoById = createServerFn({ method: 'GET' })
  .validator((todoId: string) => todoId)
  .handler(async ({ data: todoId }) => {
    console.info(`Fetching todo ${todoId}...`);
    await delay(process.env.FETCH_TODOS_DELAY);
    return await getTodoById(todoId);
  });

export const fetchTodos = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.log('Fetching all todos...');
    await delay(process.env.FETCH_TODOS_DELAY);
    return await getTodos();
  }
);

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
