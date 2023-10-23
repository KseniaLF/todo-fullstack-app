export const validateConfirmPassword = (password: string | undefined, value: string) => {
  let error = '';
  if (password !== value) {
    error = 'Password not matched';
  }
  return error;
};
