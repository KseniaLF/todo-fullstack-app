import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { handleRegister, onError } from '../utils';
import { IUser } from '../../common/types/auth.types';

export const useRegister = () => {
  const onSuccess = () => {
    toast('Verification email successfully sent!');
  };

  const { mutate, isLoading, isSuccess } = useMutation((user: IUser) => handleRegister(user), {
    onSuccess,
    onError
  });
  const register = (user: IUser) => mutate(user);

  return { register, isLoading, isSuccess };
};
