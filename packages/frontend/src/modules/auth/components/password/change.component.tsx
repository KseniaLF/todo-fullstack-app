import React from 'react';
import { FormElement } from '../form/form.component';
import { useChangePassword } from '../../hooks';

export const ChangePassword = () => {
  const { change, isLoading } = useChangePassword();

  return (
    <FormElement
      action={isLoading ? 'Loading...' : 'Change password'}
      callback={({ password }) => {
        change(password as string);
      }}
      fields={['password', 'confirm-pass']}
    />
  );
};
