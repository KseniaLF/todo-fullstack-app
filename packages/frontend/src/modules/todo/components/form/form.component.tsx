import React from 'react';
import { Formik } from 'formik';
import { ITodo } from '../../../common/types/todos.type';
import { FormContainer } from './form.styled';
import { Button } from '../../../theme/common.styled';
import { initialValues } from '../../utils/initial-value.utils';
import { TodoSchema } from '../../../common/schemas/todo.schema';
import { InputElement } from '../../../common/components/input';

export const FormElement = ({
  todo,
  action,
  callback
}: {
  todo?: ITodo;
  action: string;
  callback: (todo: ITodo) => void;
}) => (
  <div>
    <Formik
      initialValues={initialValues(todo)}
      validationSchema={TodoSchema}
      onSubmit={(data) => {
        callback(data);
      }}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <InputElement error={errors.title} touched={touched.title} name="title" />

          <InputElement
            error={errors.description}
            touched={touched.description}
            name="description"
          />

          <Button type="submit">{action}</Button>
        </FormContainer>
      )}
    </Formik>
  </div>
);
