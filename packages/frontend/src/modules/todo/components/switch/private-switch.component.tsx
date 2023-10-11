import React, { useState } from 'react';
import Switch from 'react-switch';

import { useCheckedTodo } from '../../hooks/checked';
import { ITodo } from '../../../common/types/todos.type';

export const PrivateSwitch = ({ todo }: { todo: ITodo }) => {
  const [isPrivate, setIsPrivate] = useState(() => todo.private);

  const { updateTodo } = useCheckedTodo();

  const handlePrivate = () => {
    setIsPrivate((prev) => !prev);
    updateTodo(todo, isPrivate, 'private');
  };

  return (
    <Switch
      onChange={handlePrivate}
      uncheckedIcon={false}
      checkedIcon={false}
      checked={isPrivate}
    />
  );
};
