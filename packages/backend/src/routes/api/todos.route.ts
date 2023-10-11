import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { isExist, tryCatch, validateBody } from '../../middlewares';
import { todoSchema } from '../../schemas/todo.schema';
import { todoService } from '../../services/todo.service';
import { ITodo } from '../../types/todos.type';
import { authenticate } from '../../middlewares/auth.middleware';

const todosRouter: Router = Router();

todosRouter.get('', tryCatch(todoController.getAllTodo.bind(todoController)));

todosRouter.post(
  '',
  authenticate('jwt'),
  validateBody(todoSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);

todosRouter.get(
  '/:id',
  isExist<ITodo>(todoService),
  tryCatch(todoController.findbyId.bind(todoController))
);

todosRouter.put(
  '/:id',
  validateBody(todoSchema),
  isExist<ITodo>(todoService),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExist<ITodo>(todoService),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
