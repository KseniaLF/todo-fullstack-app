import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import TodoPage from './pages/todo';
import HomePage from './pages/home';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<HomePage />} />

      <Route path={`${APP_KEYS.ROUTER_KEYS.ROOT}/:id`} element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
);
