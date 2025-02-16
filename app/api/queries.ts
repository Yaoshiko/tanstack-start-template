// Collection of react-query options.

import { queryOptions } from '@tanstack/react-query';
import { fetchTodoById } from './todos';

export function fetchTodoOpts(todoId: string) {
  return queryOptions({
    queryKey: ['todo', todoId],
    queryFn: () => fetchTodoById({ data: todoId })
  });
}
