import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
  const hashed = bcrypt.hash(password, 8);
  return hashed;
};

export const comparePasswords = (pass1: string, pass2: string) => {
  const isMatch = bcrypt.compare(pass1, pass2);
  return isMatch;
};
