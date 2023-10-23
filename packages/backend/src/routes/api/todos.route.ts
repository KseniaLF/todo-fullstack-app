import { Router } from 'express';
import { todoService } from '../../services/todo.service';
import { ITodo } from '../../types/todos.type';
import todoController from '../../controllers/todo.controller';
import { todoSchema } from '../../schemas/todo.schema';
import { authenticate, isExist, tryCatch, validateBody } from '../../middlewares';

const todosRouter: Router = Router();

todosRouter.use(authenticate('jwt'));

todosRouter.get('', tryCatch(todoController.getAllAvailableTodo.bind(todoController)));

todosRouter.post(
  '',
  validateBody(todoSchema),
  tryCatch(todoController.addTodo.bind(todoController))
);

todosRouter.get(
  '/:id',
  isExist<ITodo>(todoService),
  tryCatch(todoController.findbyId.bind(todoController))
);

todosRouter.patch(
  '/:id',
  validateBody(todoSchema),
  isExist<ITodo>(todoService, true),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isExist<ITodo>(todoService, true),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
