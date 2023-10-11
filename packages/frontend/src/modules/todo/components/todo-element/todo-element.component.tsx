import React from 'react';
import { Link } from 'react-router-dom';
import { ITodo } from '../../../common/types/todos.type';
import { useDeleteTodo } from '../../hooks';
import { Button } from '../../../theme/common.styled';
import { Actions, TodoElementContainer } from './todo-element.styled';
import { PrivateSwitch } from '../switch/private-switch.component';

export const TodoElement = ({ todo }: { todo: ITodo }) => {
  const deleteTodo = useDeleteTodo(todo.id);

  return (
    <TodoElementContainer>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>

      <Actions>
        <Link to={`${todo.id}`}>
          <Button type="button">View</Button>
        </Link>

        <Button onClick={deleteTodo} type="button">
          Delete
        </Button>

        <PrivateSwitch todo={todo} />
      </Actions>
    </TodoElementContainer>
  );
};
