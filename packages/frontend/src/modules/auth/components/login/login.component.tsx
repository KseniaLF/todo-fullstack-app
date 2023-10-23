import React from 'react';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { FormElement } from '../form/form.component';
import { useLogin } from '../../hooks';
import { IUser } from '../../../common/types/auth.types';
import { ForgotPassword } from '../password/forgot.component';
import { LoginComponent } from './login.styled';

export const LoginButton = () => {
  const { login, isLoading } = useLogin();

  return (
    <ModalComponent action="Sign in">
      <LoginComponent>
        <FormElement
          action={isLoading ? 'Loading...' : 'sign in'}
          callback={(data) => {
            login(data as IUser);
          }}
        />

        <ForgotPassword />
      </LoginComponent>
    </ModalComponent>
  );
};
