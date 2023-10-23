import { useQuery } from 'react-query';
import { APP_KEYS } from '../../common/consts';
import { fetchTodos } from '../utils';
import { useParamsHelper } from './search-params';

export const useGetTodos = () => {
  const { params, isParams, currentPage, isTablet, paramsCache } = useParamsHelper();

  const options = isTablet ? {} : params;

  const { isError, isLoading, data } = useQuery(
    [APP_KEYS.QUERY_KEYS.TODOS, options],
    () => fetchTodos(params),
    {
      enabled: !isParams
    }
  );

  return { todos: data, isLoading, isError };
};
