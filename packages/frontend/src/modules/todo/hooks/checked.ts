import { useMutation, useQueryClient } from 'react-query';
import { ITodo } from '../../common/types/todos.type';
import { APP_KEYS } from '../../common/consts';
import { handleUpdateTodo } from '../utils';
import { useHelper } from './helper';

export const useCheckedTodo = () => {
  const queryClient = useQueryClient();
  const { options, invalidateTodos } = useHelper();

  const onSuccess = () => {
    invalidateTodos();
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO]);
  };

  const { mutate } = useMutation((todo: ITodo) => handleUpdateTodo(todo), options(onSuccess));

  const updateTodo = (todo: ITodo, checked: boolean, value: 'private' | 'complete') => {
    const newData = { ...todo };
    newData[value] = !checked;
    mutate(newData);
  };

  return { updateTodo };
};
