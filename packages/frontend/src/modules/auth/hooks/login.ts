import { useMutation, useQueryClient } from 'react-query';
import { IUser } from '../../common/types/auth.types';
import { handleLogin, onError } from '../utils';
import { APP_KEYS } from '../../common/consts';

export const useLogin = () => {
  const queryClient = useQueryClient();

  const onSuccess = ({ token }: { token: string }) => {
    localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, token);
    queryClient.invalidateQueries(APP_KEYS.QUERY_KEYS.AUTH);
  };

  const { mutate, isLoading } = useMutation((user: IUser) => handleLogin(user), {
    onSuccess,
    onError
  });
  const login = (user: IUser) => mutate(user);

  return { login, isLoading };
};
