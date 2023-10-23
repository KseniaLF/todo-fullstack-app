import { authService } from '../../common/services';
import { IResetPass, IUser } from '../../common/types/auth.types';

export const handleRegister = async (user: IUser) => {
  const data = await authService.register(user);
  return data;
};

export const handleLogin = async (user: IUser) => {
  const { data } = await authService.login(user);
  return { token: data.token };
};

export const getCurrentUser = async () => {
  const { data } = await authService.current();
  return data;
};

export const changePassword = async (pass: string) => {
  const data = await authService.changePassword({ password: pass });
  return data;
};

export const forgotPassword = async (email: string) => {
  const data = await authService.forgotPassword(email);
  return data;
};

export const resetPassword = async (body: IResetPass) => {
  const data = await authService.resetPassword(body);
  return data;
};
