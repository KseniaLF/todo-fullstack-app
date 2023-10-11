import { useQuery } from 'react-query';
import { APP_KEYS } from '../../common/consts';
import { fetchTodo } from '../utils';

export const useGetTodoById = (id: string) => {
  const {
    isError,
    isLoading,
    data: todo
  } = useQuery([APP_KEYS.QUERY_KEYS.TODO, id], () => fetchTodo(id));

  return { todo, isLoading, isError };
};
