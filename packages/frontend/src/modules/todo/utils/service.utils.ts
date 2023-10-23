import { todoService } from '../../common/services';
import { ISearchParams, ITodo } from '../../common/types/todos.type';

export const handleAddTodo = async (todo: ITodo): Promise<void> => {
  await todoService.addTodo(todo);
};

export const handleUpdateTodo = async (todo: ITodo): Promise<void> => {
  const { id, description, title, complete, private: isPrivate } = todo;
  await todoService.updateTodo({ id, description, title, complete, private: isPrivate });
};

export const handleDeleteTodo = async (id: string): Promise<void> => {
  await todoService.deleteTodo(id);
};

export const fetchTodo = async (id: string): Promise<ITodo> => {
  const { data } = await todoService.getTodoById(id);
  return data;
};

export const fetchTodos = async (filterData: ISearchParams) => {
  const { data } = await todoService.getFilteredTodos(filterData);
  return data;
};
