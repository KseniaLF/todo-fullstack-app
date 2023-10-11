import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { ITodo } from '../../common/types/todos.type';
import { APP_KEYS } from '../../common/consts';
import { handleUpdateTodo, onError } from '../utils';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS], {
      refetchInactive: true
    });
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO]);

    toast('Todo successfully updated!');
  };

  const { mutate } = useMutation((todo: ITodo) => handleUpdateTodo(todo), { onSuccess, onError });
  const updateTodo = (todo: ITodo) => mutate(todo);
  return updateTodo;
};
