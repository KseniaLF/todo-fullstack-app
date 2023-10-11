import { Response, Request } from 'express';

import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();
    res.json(todos);
  }

  async addTodo(req: Request, res: Response) {
    const { id } = req.user as { id: string };
    const todos = await this.todoService.addTodo(req.body, id);
    res.status(201).json(todos);
  }

  async deleteTodo(req: Request, res: Response) {
    await this.todoService.deleteTodo(req.params.id);
    res.status(204).end();
  }

  async updateTodo(req: Request, res: Response) {
    const todo = await this.todoService.updateTodo(req.params.id, req.body);
    res.json(todo);
  }

  async findbyId(req: Request, res: Response) {
    const todo = await this.todoService.findbyId(req.params.id);
    res.json(todo);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
