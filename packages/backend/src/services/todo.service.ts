import { ITodo } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';

export default class TodoService {
  async findAll() {
    const todos = await Todo.find({
      relations: ['user.email']
    });
    return todos;
  }

  async findbyId(id: string) {
    const todo = await Todo.findOneBy({ id });
    return todo;
  }

  async addTodo(body: ITodo, id: string) {
    const todoData = Todo.create({ ...body, user: { id } });
    const newTodo = await Todo.save(todoData);
    return newTodo;
  }

  async updateTodo(id: string, body: ITodo) {
    const todo = await Todo.findOneBy({ id });
    if (!todo) return;

    const newData = Todo.create({ ...body });
    Todo.merge(todo, newData);
    const updatedTodo = await Todo.save(todo);
    return updatedTodo;
  }

  async deleteTodo(id: string) {
    await Todo.delete(id);
    return true;
  }
}

export const todoService = new TodoService();
