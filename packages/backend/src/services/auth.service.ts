import { IUser } from '../types/auth.type';
import { User } from '../entities/User';

export default class AuthService {
  async findByEmail(email: string) {
    const user = await User.findOneBy({ email });
    return user;
  }

  async getAllUsers() {
    const newUser = await User.find({
      relations: { todos: true }
    });
    return newUser;
  }

  async register(body: IUser) {
    const userData = User.create({ ...body });
    const newUser = await User.save(userData);
    return newUser;
  }

  async delete(id: string) {
    const deleted = await User.delete(id);
    return deleted;
  }

  async changePassword(id: string, password: string) {
    const deleted = await User.update(id, { password });
    return deleted;
  }
}

export const authService = new AuthService();
