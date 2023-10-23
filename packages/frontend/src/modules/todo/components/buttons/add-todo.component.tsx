import React from 'react';
import { useAddTodo } from '../../hooks';
import { ModalComponent } from '../../../common/components';
import { FormElement } from '../form/form.component';

export const AddTodoModal = () => {
  const addTodo = useAddTodo();

  return (
    <div>
      <ModalComponent action="Add todo">
        <FormElement action="Add" callback={addTodo} />
      </ModalComponent>
    </div>
  );
};
