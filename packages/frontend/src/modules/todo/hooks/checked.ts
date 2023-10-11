import { useMutation, useQueryClient } from 'react-query';
import { ITodo } from '../../common/types/todos.type';
import { APP_KEYS } from '../../common/consts';
import { handleUpdateTodo, onError } from '../utils';

export const useCheckedTodo = () => {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS], {
      refetchInactive: true
    });
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODO]);
  };

  const { mutate } = useMutation((todo: ITodo) => handleUpdateTodo(todo), { onSuccess, onError });

  const updateTodo = (todo: ITodo, checked: boolean, value: 'private' | 'complete') => {
    const newData = { ...todo };
    newData[value] = !checked;
    mutate(newData);
  };

  return { updateTodo };
};
