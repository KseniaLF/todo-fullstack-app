import { useError } from './on-error.utils';

export const useQueryOptions = () => {
  const { onError } = useError();
  return (onSuccess: () => void) => ({ onSuccess, onError });
};
