import { ILike } from 'typeorm';
import { IFilter, ITodo } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';

export default class TodoService {
  async findAllAvailable(id: string, filters: IFilter, page?: string) {
    const take = 5;
    const numberPage = page ? +page : 1;
    const skip = page ? (+page - 1) * take : 0;

    const { search, status, access } = filters;
    const whereOptions: Record<string, any> = {};

    if (search) whereOptions.title = ILike(`%${search}%`);
    if (status) whereOptions.complete = status === 'completed';

    if (access === 'private') {
      whereOptions.private = true;
      whereOptions.user = { id };
    }
    if (access === 'public') whereOptions.private = false;

    const where = [
      { private: false, ...whereOptions },
      { user: { id }, ...whereOptions }
    ];

    const todos = await Todo.find({
      where,
      order: { createdAt: 'DESC' },
      relations: { user: true },
      select: { user: { email: true } },
      skip,
      take
    });
    const totalCount = await Todo.count({ where });
    return { todos, isMore: totalCount > take * numberPage };
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
