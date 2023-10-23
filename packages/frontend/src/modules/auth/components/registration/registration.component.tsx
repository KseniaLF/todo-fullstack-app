import React from 'react';
import { ModalComponent } from '../../../common/components';
import { FormElement } from '../form/form.component';
import { useRegister } from '../../hooks';
import { IUser } from '../../../common/types/auth.types';

export const RegistrationButton = () => {
  const { register, isLoading, isSuccess } = useRegister();

  return (
    <ModalComponent action="Sign up">
      {isSuccess ? (
        <p>
          Verification email successfully sent! Check your{' '}
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
            email
          </a>
        </p>
      ) : (
        <FormElement
          action={isLoading ? 'loading' : 'sign up'}
          callback={({ email, password }) => {
            register({ email, password } as IUser);
          }}
          fields={['email', 'password', 'confirm-pass']}
        />
      )}
    </ModalComponent>
  );
};
