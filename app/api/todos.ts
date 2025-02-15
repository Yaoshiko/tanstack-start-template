import { createServerFn } from '@tanstack/start';
import { getTodoById, getTodos } from '~/db/queries';

export type PostType = {
  id: string;
  title: string;
  body: string;
};

// TODO: Add auth middleware and pass userId to data-layer APIs.

export const fetchTodoById = createServerFn({ method: 'GET' })
  .validator((todoId: string) => todoId)
  .handler(async ({ data: todoId }) => {
    console.info(`Fetching todo ${todoId}...`);
    return await getTodoById(todoId);
  });

export const fetchTodos = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.log('Fetching all todos...');
    return await getTodos();
  }
);
