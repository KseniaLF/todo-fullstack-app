import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { onError, forgotPassword, resetPassword } from '../utils';
import { IResetPass } from '../../common/types/auth.types';
import { APP_KEYS } from '../../common/consts';

export const useForgotPassword = () => {
  const { mutate, isLoading, isSuccess } = useMutation((email: string) => forgotPassword(email), {
    onError
  });
  const forgot = (email: string) => mutate(email);
  return { forgot, isLoading, isSuccess };
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate(APP_KEYS.ROUTER_KEYS.TODOS);
    toast('Password successfully updated!');
  };

  const { mutate, isLoading } = useMutation((data: IResetPass) => resetPassword(data), {
    onSuccess,
    onError
  });

  const reset = (data: IResetPass) => mutate(data);
  return { reset, isLoading };
};
