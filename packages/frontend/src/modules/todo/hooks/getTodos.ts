import { useQuery } from 'react-query';
import { APP_KEYS } from '../../common/consts';
import { fetchTodos } from '../utils';

export const useGetTodos = () => {
  const { isError, isLoading, data: todos } = useQuery(APP_KEYS.QUERY_KEYS.TODOS, fetchTodos);

  return { todos, isLoading, isError };
};
