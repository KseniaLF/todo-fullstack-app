import React from 'react';
import { TodoListContainer } from './todo-list.styled';
import { ITodo, ITodos } from '../../../common/types/todos.type';
import { TodoElement } from '../todo-element';
import { Button } from '../../../theme/common.styled';
import { useParamsHelper } from '../../hooks/search-params';

export const TodoList = ({ todos, isMore, isLoad }: ITodos) => {
  const { loadMore } = useParamsHelper();

  return (
    <TodoListContainer>
      {todos?.map((todo: ITodo) => (
        <li key={todo.id}>
          <TodoElement todo={todo} />
        </li>
      ))}

      {isMore && (
        <Button type="button" onClick={loadMore} disabled={isLoad}>
          {isLoad ? 'loading...' : 'Next page'}
        </Button>
      )}
    </TodoListContainer>
  );
};
