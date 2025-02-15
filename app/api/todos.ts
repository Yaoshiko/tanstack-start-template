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
    await delay();
    return await getTodoById(todoId);
  });

export const fetchTodos = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.log('Fetching all todos...');
    await delay();
    return await getTodos();
  }
);

function delay() {
  return new Promise((resolve) =>
    setTimeout(resolve, process.env.DELAY as unknown as number)
  );
}
