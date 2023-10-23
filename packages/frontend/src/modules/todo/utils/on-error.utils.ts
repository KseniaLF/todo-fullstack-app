import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../../auth/hooks';

export const useError = () => {
  const { logout } = useAuth();

  const onError = (error: Error) => {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) logout();
      else {
        const defaultMessage = 'Something went wrong, reload the page and try again.';
        const message = error.response?.data.message || defaultMessage;
        toast(message);
      }
    }
  };
  return { onError };
};
