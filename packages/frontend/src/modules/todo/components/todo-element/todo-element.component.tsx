import React from 'react';
import { ITodo } from '../../../common/types/todos.type';
import { useDeleteTodo } from '../../hooks';
import { Button } from '../../../theme/common.styled';
import { Actions, TodoElementContainer } from './todo-element.styled';
import { PrivateSwitch } from '../switch/private-switch.component';
import { ModalComponent } from '../../../common/components';
import { TodoPageComponent } from '../todo-page/todo-page.component';
import { useCurrent } from '../../../auth/hooks/current';

export const TodoElement = ({ todo }: { todo: ITodo }) => {
  const deleteTodo = useDeleteTodo(todo.id);
  const { isEditAccess, owner } = useCurrent(todo);

  return (
    <TodoElementContainer>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>

      <Actions>
        {isEditAccess ? (
          <>
            <ModalComponent action="View" large>
              <TodoPageComponent id={todo.id} />
            </ModalComponent>

            <Button onClick={deleteTodo} type="button">
              Delete
            </Button>

            <PrivateSwitch todo={todo} />
          </>
        ) : (
          <p> Owner: {owner}</p>
        )}
      </Actions>
    </TodoElementContainer>
  );
};
