import React from 'react';
import { Formik } from 'formik';
import { IFormData } from '../../../common/types/auth.types';
import { FormContainer } from '../../../todo/components/form/form.styled';
import { Button } from '../../../theme/common.styled';
import { generateAuthSchema, getInitialValues } from '../../utils';
import { InputField } from './input-field.component';

export const FormElement = ({ action, callback, fields = ['email', 'password'] }: IFormData) => (
  <div>
    <Formik
      initialValues={getInitialValues(fields)}
      validationSchema={generateAuthSchema(fields)}
      onSubmit={(data) => {
        callback(data);
      }}
    >
      {({ values, errors, touched }) => (
        <FormContainer>
          <ul>
            {fields.map((field) => (
              <li key={field}>
                <InputField field={field} values={values} errors={errors} touched={touched} />
              </li>
            ))}
          </ul>

          <Button type="submit">{action}</Button>
        </FormContainer>
      )}
    </Formik>
  </div>
);
