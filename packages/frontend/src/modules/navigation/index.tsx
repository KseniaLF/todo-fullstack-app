import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import HomePage from './pages/home';
import TodosPage from './pages/todo';
import ResetPasswordPage from './pages/reset-password';
import { PrivateRoute, RestrictedRoute } from './routes.component';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={APP_KEYS.ROUTER_KEYS.ROOT}
        element={<RestrictedRoute element={<HomePage />} />}
      />

      <Route
        path={`${APP_KEYS.ROUTER_KEYS.RESET_PASS}/:verificationToken`}
        element={<RestrictedRoute element={<ResetPasswordPage />} />}
      />

      <Route path={APP_KEYS.ROUTER_KEYS.TODOS} element={<PrivateRoute element={<TodosPage />} />} />
    </Routes>
  </BrowserRouter>
);
