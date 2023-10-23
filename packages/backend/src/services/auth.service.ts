import { IUser } from '../types/auth.type';
import { User } from '../entities/User';

export default class AuthService {
  async findByEmail(email: string, isRequiredVerify = false) {
    const query = isRequiredVerify ? { verified: true, email } : { email };
    const user = await User.findOneBy(query);
    return user;
  }

  async register(body: IUser) {
    const userData = User.create({ ...body });
    const newUser = await User.save(userData);
    return newUser;
  }

  async verifyEmail(verificationToken: string) {
    const user = await User.update(
      { verificationToken },
      { verified: true, verificationToken: '' }
    );
    return user;
  }

  async setVerificationToken(id: string, verificationToken: string) {
    const user = await User.update(id, { verificationToken });
    return user;
  }

  async findByVerificationToken(verificationToken: string) {
    const user = await User.findOneBy({ verificationToken });
    return user;
  }

  async delete(id: string) {
    const deleted = await User.delete(id);
    return deleted;
  }

  async changePassword(id: string, password: string) {
    const data = await User.update(id, { password });
    return data;
  }
}

export const authService = new AuthService();
