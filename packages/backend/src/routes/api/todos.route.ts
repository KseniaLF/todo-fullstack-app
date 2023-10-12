import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { isExist, tryCatch, validateBody } from '../../middlewares';
import { todoSchema } from '../../schemas/todo.schema';
import { todoService } from '../../services/todo.service';
import { ITodo } from '../../types/todos.type';
import { authenticate } from '../../middlewares/auth.middleware';
import { isEditAccess } from '../../middlewares/is-edit-access.middleware';

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
  isEditAccess<ITodo>(todoService),
  tryCatch(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  '/:id',
  isEditAccess<ITodo>(todoService),
  tryCatch(todoController.deleteTodo.bind(todoController))
);

export default todosRouter;
