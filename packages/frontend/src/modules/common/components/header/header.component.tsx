import React from 'react';
import { Button } from '../../../theme/common.styled';
import { useAuth } from '../../../auth/hooks';
import { ModalComponent } from '../modal/modal.component';
import { ChangePassword } from '../../../auth/components';
import { HeaderContainer } from './header.styled';

export const Header = () => {
  const { logout, email } = useAuth();

  return (
    <HeaderContainer>
      <Button onClick={logout}>Log out</Button>

      <ModalComponent action="My Profile">
        <>
          <h2>{email}</h2>
          <ChangePassword />
        </>
      </ModalComponent>
    </HeaderContainer>
  );
};
