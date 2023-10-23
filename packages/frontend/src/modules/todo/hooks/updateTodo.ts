import { useMutation, useQueryClient } from 'react-query';
import { ITodo } from '../../common/types/todos.type';
import { APP_KEYS } from '../../common/consts';
import { handleUpdateTodo } from '../utils';
import { useHelper } from './helper';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const { options, invalidateTodos, toast } = useHelper();

  const onSuccess = () => {
    invalidateTodos();
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO]);
    toast('Todo successfully updated!');
  };

  const { mutate } = useMutation((todo: ITodo) => handleUpdateTodo(todo), options(onSuccess));
  const updateTodo = (todo: ITodo) => {
    mutate(todo);
  };
  return updateTodo;
};
