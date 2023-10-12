import { ITodo } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';

export default class TodoService {
  async findAllAvailable(id: string) {
    const todos = await Todo.find({
      where: [{ private: false }, { user: { id } }],
      order: { createdAt: 'DESC' }
    });
    return todos;
  }

  async findAvailableById(id: string, userId: string) {
    const todo = await Todo.findOne({
      where: [
        { id, private: false },
        { id, user: { id: userId } }
      ],
      relations: { user: true },
      select: {
        user: { email: true, createdAt: true }
      }
    });
    return todo;
  }

  async findbyIdWithEditAccess(id: string, userId: string) {
    const todo = await Todo.findOne({ where: { id, user: { id: userId } } });
    return todo;
  }

  async addTodo(body: ITodo, userId: string) {
    const todoData = Todo.create({ ...body, user: { id: userId } });
    const newTodo = await Todo.save(todoData);
    return newTodo;
  }

  async updateTodo(id: string, body: ITodo) {
    const updatedTodo = await Todo.update(id, { ...body });
    return updatedTodo;
  }

  async deleteTodo(id: string) {
    await Todo.delete(id);
    return true;
  }
}

export const todoService = new TodoService();
