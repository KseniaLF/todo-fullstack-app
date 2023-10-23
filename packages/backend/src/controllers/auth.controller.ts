import { Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { HttpError } from '../middlewares';
import AuthService from '../services/auth.service';
import { hashPassword, comparePasswords, generateToken } from '../utils';
import { sendEmail } from '../utils/send-email.utils';

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(req: Request, res: Response) {
    const { email } = req.body;

    const userExists = await this.authService.findByEmail(email);
    if (userExists) throw new HttpError(409);

    const user = { ...req.body };
    user.password = await hashPassword(user.password);
    user.verificationToken = uuidv4();

    await this.authService.register(user);

    await sendEmail({
      to: email,
      subject: 'Verify email',
      html: `<a target="_blank" href="${process.env.BASE_URL}/user/verify/${user.verificationToken}">click</a>`
    });

    res.status(201).send('An email has been sent to email for verification');
  }

  async verifyEmail(req: Request, res: Response) {
    const { verificationToken } = req.params;
    await this.authService.verifyEmail(verificationToken);
    res.status(200).send('Verification successful! You can log in now.');
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.authService.findByEmail(email);
    if (!user) throw new HttpError(404, 'Email or password is wrong');

    const isVerifiedEmail = await this.authService.findByEmail(email, true);
    if (!isVerifiedEmail) throw new HttpError(403, 'Email verification required');

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) throw new HttpError(401, 'Email or password is wrong');

    const token = generateToken(user.id);
    res.send({ token, email });
  }

  async changePassword(req: Request, res: Response) {
    const { id, password: oldPassword } = req.user as { id: string; password: string };
    let { password } = req.body;

    const isMatch = await comparePasswords(password, oldPassword);
    if (isMatch) throw new HttpError(400, 'The old password cannot match the new password.');

    password = await hashPassword(password);
    await this.authService.changePassword(id, password);
    res.status(204).end();
  }

  async resetPassword(req: Request, res: Response) {
    const { email } = req.body;

    const user = await this.authService.findByEmail(email);
    if (!user) throw new HttpError(404, 'Email not found');

    const verificationToken = uuidv4();
    await this.authService.setVerificationToken(user.id, verificationToken);

    await sendEmail({
      to: email,
      subject: 'Verify email',
      html: `<a target="_blank" href="${process.env.BASE_FRONTEND_URL}/reset-password/${verificationToken}">
      To reset password click here</a>`
    });

    res.status(204).end();
  }

  async confirmResetPassword(req: Request, res: Response) {
    let { password } = req.body;

    const user = await this.authService.findByVerificationToken(req.body.verificationToken);
    if (!user) throw new HttpError(404);

    password = await hashPassword(password);
    await this.authService.changePassword(user.id, password);
    res.status(204).end();
  }

  async getCurrentUser(req: Request, res: Response) {
    const { email } = req.user as { email: string };
    res.json({ email });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.user as { id: string };
    await this.authService.delete(id);
    res.status(204).end();
  }
}

const authController = new AuthController(new AuthService());
export default authController;
