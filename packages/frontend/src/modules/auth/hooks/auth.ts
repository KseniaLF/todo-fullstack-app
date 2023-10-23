import { useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { getCurrentUser } from '../utils/service.utils';
import { APP_KEYS } from '../../common/consts';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { AUTH } = APP_KEYS.QUERY_KEYS;

  const { isLoading, data } = useQuery(AUTH, getCurrentUser, {
    retry: 1
  });

  const logout = () => {
    localStorage.removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
    queryClient.setQueryData(AUTH, false);
    toast('You have successfully logged out of your account!');
  };

  const isLoggedIn = data && !isLoading;
  const email = data?.email;

  return { isLoggedIn, isLoading, logout, email };
};
