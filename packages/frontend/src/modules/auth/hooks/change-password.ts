import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { changePassword, onError } from '../utils';

export const useChangePassword = () => {
  const onSuccess = () => {
    toast('Password successfully updated!');
  };

  const { mutate, isLoading, isSuccess } = useMutation(
    (password: string) => changePassword(password),
    { onSuccess, onError }
  );

  const change = (password: string) => mutate(password);
  return { change, isLoading, isSuccess };
};
