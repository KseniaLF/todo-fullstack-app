import { useSearchParams } from 'react-router-dom';
import { ISearchParams } from '../../common/types/todos.type';
import { getSearchParams, getClearParams } from '../utils';
import { useMedia } from '../../common/hooks/use-media';

export const useParamsHelper = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const isParams = searchParams.size > 0;
  const params = getSearchParams(searchParams);
  const { isDesktop, isTablet } = useMedia();

  const setParam = (param: ISearchParams) => {
    if (!param.page) {
      setSearchParams((prev) => new URLSearchParams({ ...getClearParams(prev), ...param }));
    } else setSearchParams((prev) => new URLSearchParams({ ...getSearchParams(prev), ...param }));
  };

  const clearParams = () => setSearchParams({});

  const loadMore = () => {
    const page = params?.page ? (+params.page + 1).toString() : '2';
    setParam({ page });
  };
  const currentPage = params?.page ? Number(params?.page) : 1;
  const isPrev = currentPage > 1;
  const prevPage = () => {
    const page = isPrev ? (+params.page - 1).toString() : '2';
    setParam({ page });
  };

  const resetPage = () => {
    setParam({ page: '1' });
  };

  return {
    searchParams,
    setSearchParams,
    params,
    isParams,
    getSearchParams,
    setParam,
    clearParams,
    resetPage,
    loadMore,
    currentPage,
    isPrev,
    prevPage,
    isLoadMore: !isDesktop,
    isTablet,
    paramsCache: getClearParams(searchParams)
  };
};
