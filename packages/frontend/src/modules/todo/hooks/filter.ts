import { useMutation, useQueryClient } from 'react-query';
import { useEffect } from 'react';
import { APP_KEYS } from '../../common/consts';
import { fetchTodos } from '../utils';
import { ITodos } from '../../common/types/todos.type';
import { filterState } from '../utils/filter-state.utils';
import { useParamsHelper } from './search-params';

export const useFilter = () => {
  const queryClient = useQueryClient();
  const {
    searchParams,
    params,
    currentPage,
    isParams,
    isTablet,
    setParam,
    clearParams,
    paramsCache
  } = useParamsHelper();

  const onSuccess = (filteredData: ITodos) => {
    const fetch = () => {
      const { isMore, todos } = filteredData;
      const res = { todos, isMore };
      return res;
    };

    const fetchMore = (oldData: ITodos | undefined) => {
      const { isMore, todos } = filteredData;
      const res = { todos, isMore };
      if (oldData && currentPage > 1) res.todos = [...oldData.todos, ...todos];
      return res;
    };

    if (isTablet) queryClient.setQueryData([APP_KEYS.QUERY_KEYS.TODOS, {}], fetchMore);
    else queryClient.setQueryData([APP_KEYS.QUERY_KEYS.TODOS, params], fetch);
  };

  const { mutate, isLoading } = useMutation(() => fetchTodos(params), { onSuccess });

  useEffect(() => {
    if (isParams) mutate();
  }, [searchParams]);

  return {
    setParam,
    clearParams,
    filterState: filterState(params),
    params,
    isLoading
  };
};
