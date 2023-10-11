import React, { useState } from 'react';
import Switch from 'react-switch';

import { useCheckedTodo } from '../../hooks/checked';
import { ITodo } from '../../../common/types/todos.type';

export const CompleteSwitch = ({ todo }: { todo: ITodo }) => {
  const [complete, setComplete] = useState(() => todo.complete);
  const { updateTodo } = useCheckedTodo();

  const handleComplete = () => {
    setComplete((prev) => !prev);
    updateTodo(todo, complete, 'complete');
  };

  return (
    <Switch
      onChange={handleComplete}
      uncheckedIcon={false}
      checkedIcon={false}
      checked={complete}
    />
  );
};
