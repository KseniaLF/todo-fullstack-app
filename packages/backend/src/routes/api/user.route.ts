import { Router } from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import { tryCatch, validateBody } from '../../middlewares';
import authController from '../../controllers/auth.controller';
import { authSchema, changePasswordSchema } from '../../schemas/auth.schema';

const router: Router = Router();

router.get('/all', tryCatch(authController.getAllUsers.bind(authController)));

router.post('/', validateBody(authSchema), tryCatch(authController.register.bind(authController)));

router.post(
  '/login',
  validateBody(authSchema),
  tryCatch(authController.login.bind(authController))
);

router.get('/', authenticate('jwt'), tryCatch(authController.getCurrentUser.bind(authController)));

router.delete('/', authenticate('jwt'), tryCatch(authController.delete.bind(authController)));

router.patch(
  '/password',
  authenticate('jwt'),
  validateBody(changePasswordSchema),
  tryCatch(authController.changePassword.bind(authController))
);

export default router;
