import { IResetPass, IUser } from '../types/auth.types';
import { HttpService } from './http.service';

class AuthService extends HttpService {
  register(data: IUser) {
    return this.post({ url: 'user', data }, false);
  }

  login(data: IUser) {
    return this.post({ url: 'user/login', data }, false);
  }

  current() {
    return this.get({ url: 'user/current' });
  }

  changePassword(data: { password: string }) {
    return this.patch({ url: 'user/password/change', data });
  }

  forgotPassword(data: string) {
    return this.post({ url: 'user/password/reset', data }, false);
  }

  resetPassword(data: IResetPass) {
    return this.post({ url: 'user/password/confirm-reset', data }, false);
  }
}

export const authService = new AuthService();
