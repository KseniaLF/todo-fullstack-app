import React from 'react';
import { useDeleteTodo, useGetTodoById, useUpdateTodo } from '../../hooks';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { FormElement } from '../form/form.component';
import { Button } from '../../../theme/common.styled';
import { SwitchContainer, Todo, TodoActions, TodoPage } from './todo-page.styled';
import { CompleteSwitch } from '../switch/complete-switch.component';
import { PrivateSwitch } from '../switch/private-switch.component';

export const TodoPageComponent = ({ id }: { id: string }) => {
  const { todo, isLoading, isError } = useGetTodoById(id);
  const deleteTodo = useDeleteTodo(id);
  const updateTodo = useUpdateTodo();

  return (
    <TodoPage>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {!todo && <p>Nothing found.</p>}

      {todo && (
        <Todo>
          <h2>{todo.title}</h2>
          <p>Descritpion: {todo.description}</p>

          <SwitchContainer>
            <div>
              <p>Complete:</p>
              <CompleteSwitch todo={todo} />
            </div>

            <div>
              <p>Private:</p>
              <PrivateSwitch todo={todo} />
            </div>
          </SwitchContainer>

          <TodoActions>
            <ModalComponent action="Edit todo">
              <FormElement todo={todo} action="Edit" callback={updateTodo} />
            </ModalComponent>

            <Button onClick={deleteTodo} type="button">
              Delete
            </Button>
          </TodoActions>
        </Todo>
      )}
    </TodoPage>
  );
};
