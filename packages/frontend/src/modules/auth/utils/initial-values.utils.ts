import { Fields, TInitialValues } from '../../common/types/auth.types';

export const getInitialValues = (fields: Fields[]): TInitialValues => {
  const res: TInitialValues = {};

  fields.forEach((field) => {
    res[field] = 'password';
  });

  return res;
};
