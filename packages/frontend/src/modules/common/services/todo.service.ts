import { ITodo } from '../types/todos.type';
import { HttpService } from './http.service';

class TodoService extends HttpService {
  getTodos() {
    return this.get({ url: 'todos' }, false);
  }

  getTodoById(id: string) {
    return this.get({ url: `todos/${id}` }, false);
  }

  deleteTodo(id: string) {
    return this.delete({ url: `todos/${id}` }, false);
  }

  updateTodo({ id, ...data }: ITodo) {
    return this.put({ url: `todos/${id}`, data }, false);
  }

  addTodo({ id, ...data }: ITodo) {
    return this.post({ url: 'todos', data }, false);
  }
}

export const todoService = new TodoService();
