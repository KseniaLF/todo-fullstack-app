import React from 'react';
import { TodoContainer } from '../../todo/components/todo-container';
import { Header } from '../../common/components/header/header.component';

const TodosPage = () => (
  <>
    <Header />
    <TodoContainer />
  </>
);

export default TodosPage;
