import { Response, Request } from 'express';

import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllAvailableTodo(req: Request, res: Response) {
    const { id: userId } = req.user as { id: string };
    const { page, ...filters } = req.query;
    const todos = await this.todoService.findAllAvailable(userId, filters, page as string);
    res.json(todos);
  }

  async findbyId(req: Request, res: Response) {
    const { id: userId } = req.user as { id: string };
    const todo = await this.todoService.findAvailableById(req.params.id, userId);
    res.json(todo);
  }

  async addTodo(req: Request, res: Response) {
    const { id: userId } = req.user as { id: string };
    await this.todoService.addTodo(req.body, userId);
    res.status(201).end();
  }

  async updateTodo(req: Request, res: Response) {
    await this.todoService.updateTodo(req.params.id, req.body);
    res.status(204).end();
  }

  async deleteTodo(req: Request, res: Response) {
    await this.todoService.deleteTodo(req.params.id);
    res.status(204).end();
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
