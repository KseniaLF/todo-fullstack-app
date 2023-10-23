import { useMutation } from 'react-query';
import { ITodo } from '../../common/types/todos.type';
import { handleAddTodo } from '../utils';
import { useHelper } from './helper';

export const useAddTodo = () => {
  const { options, invalidateTodos, toast } = useHelper();

  const onSuccess = () => {
    invalidateTodos();
    toast('Todo successfully added!');
  };

  const { mutate } = useMutation((todo: ITodo) => handleAddTodo(todo), options(onSuccess));
  const addTodo = (todo: ITodo) => mutate(todo);
  return addTodo;
};
