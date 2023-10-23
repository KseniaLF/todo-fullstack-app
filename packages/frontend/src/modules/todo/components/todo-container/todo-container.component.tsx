import React from 'react';
import { useFilter } from '../../hooks';
import { AddTodoModal } from '../buttons';
import { Todos } from './todos.component';
import { Todo } from './todo-container.styled';
import { FilterComponent } from '../filter';

export const TodoContainer = () => {
  const { setParam, clearParams, filterState, isLoading } = useFilter();

  return (
    <Todo>
      <AddTodoModal />
      <FilterComponent setParam={setParam} clearParams={clearParams} filterState={filterState} />

      <Todos isLoading={isLoading} />
    </Todo>
  );
};
