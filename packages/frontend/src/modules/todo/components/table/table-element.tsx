import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../theme/common.styled';
import { ITodo } from '../../../common/types/todos.type';
import { useDeleteTodo } from '../../hooks';
import { Actions } from './table.styled';
import { PrivateSwitch } from '../switch/private-switch.component';

export const TodoTableElement = ({ todo }: { todo: ITodo }) => {
  const deleteTodo = useDeleteTodo(todo.id);

  return (
    <>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <Actions>
        <div>
          <Link to={`${todo.id}`}>
            <Button type="button">View</Button>
          </Link>

          <Button onClick={deleteTodo} type="button">
            Delete
          </Button>

          <PrivateSwitch todo={todo} />
        </div>
      </Actions>
    </>
  );
};
