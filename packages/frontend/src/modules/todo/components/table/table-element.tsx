import React from 'react';
import { Button } from '../../../theme/common.styled';
import { ITodo } from '../../../common/types/todos.type';
import { useDeleteTodo } from '../../hooks';
import { Actions } from './table.styled';
import { PrivateSwitch } from '../switch/private-switch.component';
import { ModalComponent } from '../../../common/components';
import { TodoPageComponent } from '../todo-page/todo-page.component';
import { useCurrent } from '../../../auth/hooks/current';

export const TodoTableElement = ({ todo }: { todo: ITodo }) => {
  const deleteTodo = useDeleteTodo(todo.id);
  const { isEditAccess, owner } = useCurrent(todo);

  return (
    <>
      <td>{todo.title}</td>
      <td>{todo.description}</td>

      <Actions>
        {isEditAccess ? (
          <div>
            <ModalComponent action="View" large>
              <TodoPageComponent id={todo.id} />
            </ModalComponent>

            <Button onClick={deleteTodo} type="button">
              Delete
            </Button>

            <PrivateSwitch todo={todo} />
          </div>
        ) : (
          <p> Owner: {owner}</p>
        )}
      </Actions>
    </>
  );
};
