import React from 'react';
import { ITodo } from '../../../common/types/todos.type';
import { useGetTodos, useAddTodo } from '../../hooks';
import { TodoElement } from '../todo-element';
import { ModalComponent } from '../../../common/components/modal/modal.component';
import { FormElement } from '../form/form.component';
import { Todo, TodoList } from './todo-container.styled';
import { useMedia } from '../../../common/hooks/use-media';
import { TodoSwiper } from '../swiper/swiper.component';
import { TodoTable } from '../table';

export const TodoContainer = () => {
  const { isTablet, isMobile, isDesktop } = useMedia();
  const { todos, isLoading, isError } = useGetTodos();
  const addTodo = useAddTodo();

  return (
    <Todo>
      <div>
        <ModalComponent action="Add todo">
          <FormElement action="Add" callback={addTodo} />
        </ModalComponent>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {!todos?.length && <p>There are no todos here.</p>}

      {isMobile && (
        <TodoList>
          {todos?.map((todo: ITodo) => (
            <li key={todo.id}>
              <TodoElement todo={todo} />
            </li>
          ))}
        </TodoList>
      )}

      {isTablet && todos && <TodoSwiper todos={todos} />}

      {isDesktop && todos && <TodoTable todos={todos} />}
    </Todo>
  );
};
