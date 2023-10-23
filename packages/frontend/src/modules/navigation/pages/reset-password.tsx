import React from 'react';
import { useParams } from 'react-router-dom';
import { ModalComponent } from '../../common/components';
import { FormElement } from '../../auth/components';
import { IResetPass } from '../../common/types/auth.types';
import { useResetPassword } from '../../auth/hooks';

const ResetPasswordPage = () => {
  const { verificationToken } = useParams();
  const { reset, isLoading } = useResetPassword();

  return (
    <div>
      <h1>Reset Password Page</h1>

      <ModalComponent action="Reset Password" isOpen>
        <FormElement
          action={isLoading ? 'Loading...' : 'Reset Password'}
          callback={({ password }) => {
            reset({ password, verificationToken } as IResetPass);
          }}
          fields={['password', 'confirm-pass']}
        />
      </ModalComponent>
    </div>
  );
};

export default ResetPasswordPage;
