import * as Yup from 'yup';

export const TodoSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(5, 'Too Short!').max(1000, 'Too Long!').required('Required')
});
