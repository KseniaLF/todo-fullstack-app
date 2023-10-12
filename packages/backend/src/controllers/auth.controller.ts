import { Response, Request } from 'express';
import { HttpError } from '../middlewares';
import AuthService from '../services/auth.service';
import { hashPassword, comparePasswords, generateToken } from '../utils';

export class AuthController {
  constructor(private authService: AuthService) {}

  async register(req: Request, res: Response) {
    const { email } = req.body;

    const userExists = await this.authService.findByEmail(email);
    if (userExists) throw new HttpError(409);

    const user = { ...req.body };
    user.password = await hashPassword(user.password);
    const newUser = await this.authService.register(user);

    const token = generateToken(newUser.id);
    res.status(201).json({ token, email });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await this.authService.findByEmail(email);
    if (!user) throw new HttpError(404);

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

  async getCurrentUser(req: Request, res: Response) {
    const { email } = req.user as { email: string };
    res.json({ email });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.user as { id: string };
    await this.authService.delete(id);
    res.status(204).end();
  }

  async getAllUsers(req: Request, res: Response) {
    const user = await this.authService.getAllUsers();
    res.json(user);
  }
}

const authController = new AuthController(new AuthService());
export default authController;
