import React from 'react';
import { InputElement } from '../../../common/components';
import { validateConfirmPassword } from '../../utils';
import { TInputField } from '../../../common/types/auth.types';

export const InputField = ({ field, values, errors, touched }: TInputField) => {
  const commonProps = {
    error: errors[field],
    touched: touched[field],
    name: field,
    type: 'email'
  };

  if (field === 'password' || field === 'confirm-pass') {
    commonProps.type = 'password';
  }

  if (field === 'confirm-pass') {
    return (
      <InputElement
        validate={(value) => validateConfirmPassword(values.password, value)}
        {...commonProps}
      />
    );
  }

  return <InputElement {...commonProps} />;
};
