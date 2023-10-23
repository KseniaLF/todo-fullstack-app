import { IFilterState, ISearchParams } from '../../common/types/todos.type';

export const filterState = (params: ISearchParams): IFilterState => {
  const isPrivate = params.access === 'private';
  const isPublic = params.access === 'public';
  const isCompleted = params.status === 'completed';
  const isInProgress = params.status === 'inprogress';
  const isAll = !isPrivate && !isPublic && !isCompleted && !isInProgress;

  return { isPrivate, isPublic, isCompleted, isInProgress, isAll };
};
