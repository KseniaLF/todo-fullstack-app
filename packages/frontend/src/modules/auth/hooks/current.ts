import { useQueryClient } from 'react-query';
import { APP_KEYS } from '../../common/consts';
import { ITodo } from '../../common/types/todos.type';

export const useCurrent = (todo: ITodo) => {
  const queryClient = useQueryClient();
  const { email } = queryClient.getQueryData(APP_KEYS.QUERY_KEYS.AUTH) as { email: string };

  const owner = todo.user?.email;

  const isEditAccess = email === owner;

  return { email, isEditAccess, owner };
};
