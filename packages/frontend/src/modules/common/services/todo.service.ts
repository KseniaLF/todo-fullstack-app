import { ISearchParams, ITodo } from '../types/todos.type';
import { HttpService } from './http.service';

class TodoService extends HttpService {
  getFilteredTodos(filterData: ISearchParams) {
    const queryParams = new URLSearchParams({ ...filterData });
    const url = `todos?${queryParams.toString()}`;
    return this.get({ url });
  }

  getTodoById(id: string) {
    return this.get({ url: `todos/${id}` });
  }

  deleteTodo(id: string) {
    return this.delete({ url: `todos/${id}` });
  }

  updateTodo({ id, ...data }: ITodo) {
    return this.patch({ url: `todos/${id}`, data });
  }

  addTodo({ id, ...data }: ITodo) {
    return this.post({ url: 'todos', data });
  }
}

export const todoService = new TodoService();
