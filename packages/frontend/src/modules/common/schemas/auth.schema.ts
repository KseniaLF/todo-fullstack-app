import * as Yup from 'yup';

export const AuthSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().min(5, 'Too Short!').max(30, 'Too Long!').required('Required')
});
