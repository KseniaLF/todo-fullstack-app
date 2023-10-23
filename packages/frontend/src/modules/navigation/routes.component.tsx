import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/hooks';
import { APP_KEYS } from '../common/consts';

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) return <p>Loading</p>;
  return isLoggedIn ? element : <Navigate to={APP_KEYS.ROUTER_KEYS.ROOT} />;
};

export const RestrictedRoute = ({ element }: { element: JSX.Element }) => {
  const { isLoggedIn, isLoading } = useAuth();
  if (isLoading) return <p>Loading</p>;
  return isLoggedIn ? <Navigate to={APP_KEYS.ROUTER_KEYS.TODOS} /> : element;
};
