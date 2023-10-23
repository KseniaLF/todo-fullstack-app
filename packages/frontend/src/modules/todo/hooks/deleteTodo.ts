import { useMutation } from 'react-query';
import { handleDeleteTodo } from '../utils';
import { useHelper } from './helper';

export const useDeleteTodo = (id: string) => {
  const { options, invalidateTodos, toast, resetPage } = useHelper();

  const onSuccess = () => {
    invalidateTodos();
    // resetPage();
    toast('Todo successfully deleted!');
  };

  const { mutate } = useMutation(() => handleDeleteTodo(id), options(onSuccess));
  const deleteTodo = () => mutate();
  return deleteTodo;
};
