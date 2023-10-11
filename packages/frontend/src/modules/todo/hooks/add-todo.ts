import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { ITodo } from '../../common/types/todos.type';
import { APP_KEYS } from '../../common/consts';
import { handleAddTodo, onError } from '../utils';

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const onSuccess = () => {
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);

    toast('Todo successfully added!');
  };

  const { mutate } = useMutation((todo: ITodo) => handleAddTodo(todo), { onSuccess, onError });
  const addTodo = (todo: ITodo) => mutate(todo);
  return addTodo;
};
