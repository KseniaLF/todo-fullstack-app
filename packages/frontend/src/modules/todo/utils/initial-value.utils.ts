import { ITodo } from '../../common/types/todos.type';

export const initialValues = (todo: ITodo | undefined) => ({
  id: todo ? todo.id : '',
  title: todo ? todo.title : '',
  description: todo ? todo.description : '',
  complete: todo ? todo.complete : false,
  private: todo ? todo.private : true
});
