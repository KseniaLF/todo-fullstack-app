import React from 'react';
import { LoginButton, RegistrationButton } from '../../auth/components';

const HomePage = () => (
  <div>
    <h1>Todo list</h1>

    <LoginButton />
    <RegistrationButton />
  </div>
);

export default HomePage;
