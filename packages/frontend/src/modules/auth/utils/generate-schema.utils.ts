import * as Yup from 'yup';
import { Fields } from '../../common/types/auth.types';

export const generateAuthSchema = (fields: Fields[]) => {
  let schema = Yup.object();

  if (fields.includes('email')) {
    schema = schema.shape({
      email: Yup.string().email().required('Required')
    });
  }

  if (fields.includes('password')) {
    schema = schema.shape({
      password: Yup.string().min(5, 'Too Short!').max(30, 'Too Long!').required('Required')
    });
  }

  return schema;
};
