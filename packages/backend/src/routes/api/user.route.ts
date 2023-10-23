import { Router } from 'express';
import { authenticate, tryCatch, validateBody } from '../../middlewares';
import authController from '../../controllers/auth.controller';
import {
  authSchema,
  changePasswordSchema,
  emailSchema,
  resetPasswordSchema
} from '../../schemas/auth.schema';

const router: Router = Router();

router.post('/', validateBody(authSchema), tryCatch(authController.register.bind(authController)));

router.get('/verify/:verificationToken', tryCatch(authController.verifyEmail.bind(authController)));

router.post(
  '/login',
  validateBody(authSchema),
  tryCatch(authController.login.bind(authController))
);

router.get(
  '/current',
  authenticate('jwt'),
  tryCatch(authController.getCurrentUser.bind(authController))
);

router.delete('/', authenticate('jwt'), tryCatch(authController.delete.bind(authController)));

router.patch(
  '/password/change',
  authenticate('jwt'),
  validateBody(changePasswordSchema),
  tryCatch(authController.changePassword.bind(authController))
);

router.post(
  '/password/reset',
  validateBody(emailSchema),
  tryCatch(authController.resetPassword.bind(authController))
);

router.post(
  '/password/confirm-reset',
  validateBody(resetPasswordSchema),
  tryCatch(authController.confirmResetPassword.bind(authController))
);

export default router;
