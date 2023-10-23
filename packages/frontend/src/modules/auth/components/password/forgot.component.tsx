import React from 'react';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { FormElement } from '../form/form.component';
import { useForgotPassword } from '../../hooks';

export const ForgotPassword = () => {
  const { forgot, isLoading, isSuccess } = useForgotPassword();

  return (
    <ModalComponent action="Forgot password¿">
      {isSuccess ? (
        <p>
          Verification email successfully sent! Check your{' '}
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
            email
          </a>
        </p>
      ) : (
        <FormElement
          action={isLoading ? 'Loading...' : 'Reset'}
          callback={(data) => {
            forgot(data as string);
          }}
          fields={['email']}
        />
      )}
    </ModalComponent>
  );
};
