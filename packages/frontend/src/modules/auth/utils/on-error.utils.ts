import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const onError = (error: Error) => {
  let message = 'Something went wrong, reload the page and try again.';

  if (error instanceof AxiosError) {
    message = error.response?.data.message || message;
  }
  toast(message);
};
