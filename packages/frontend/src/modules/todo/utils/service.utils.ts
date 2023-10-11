import { todoService } from '../../common/services';
import { ITodo } from '../../common/types/todos.type';

export const handleAddTodo = async (todo: ITodo): Promise<void> => {
  await todoService.addTodo(todo);
};

export const handleUpdateTodo = async (todo: ITodo): Promise<void> => {
  await todoService.updateTodo(todo);
};

export const handleDeleteTodo = async (id: string): Promise<void> => {
  await todoService.deleteTodo(id);
};

export const fetchTodo = async (id: string): Promise<ITodo> => {
  const { data } = await todoService.getTodoById(id);
  return data;
};

export const fetchTodos = async (): Promise<ITodo[]> => {
  const { data } = await todoService.getTodos();
  return data;
};
