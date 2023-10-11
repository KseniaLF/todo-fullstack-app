import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { APP_KEYS } from '../../common/consts';
import { handleDeleteTodo, onError } from '../utils';

export const useDeleteTodo = (id: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS], {
      refetchInactive: true
    });

    toast('Todo successfully deleted!');
    navigate(APP_KEYS.ROUTER_KEYS.ROOT);
  };

  const { mutate } = useMutation(() => handleDeleteTodo(id), { onSuccess, onError });
  const deleteTodo = () => mutate();
  return deleteTodo;
};
