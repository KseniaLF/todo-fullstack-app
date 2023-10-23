import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useError } from '../utils';
import { APP_KEYS } from '../../common/consts';
import { useParamsHelper } from './search-params';

export const useHelper = () => {
  const { resetPage, currentPage, isTablet, paramsCache, params } = useParamsHelper();

  // options for useMutation
  const { onError } = useError();
  const options = (onSuccess: () => void) => ({ onSuccess, onError });

  // invalidation
  const queryClient = useQueryClient();
  const invalidateTodos = () => {
    const queryOption = isTablet ? {} : params;

    queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS, queryOption], {
      refetchInactive: true
    });
  };

  // navigation
  const navigateTo = useNavigate();
  const navigate = (path: string) => navigateTo(path);

  // toast message
  const genToast = (msg: string) => toast(msg);

  return { invalidateTodos, options, toast: genToast, navigate, resetPage };
};
