import { Router } from 'express';
import { authenticate } from '../../middlewares/auth.middleware';
import { tryCatch } from '../../middlewares';
import authController from '../../controllers/auth.controller';

const router: Router = Router();

router.get('/all', tryCatch(authController.getAllUsers.bind(authController)));

router.post('/', tryCatch(authController.register.bind(authController)));

router.post('/login', tryCatch(authController.login.bind(authController)));

router.get('/', authenticate('jwt'), tryCatch(authController.getCurrentUser.bind(authController)));

router.delete('/', authenticate('jwt'), tryCatch(authController.delete.bind(authController)));

router.patch(
  '/',
  authenticate('jwt'),
  tryCatch(authController.changePassword.bind(authController))
);

export default router;
