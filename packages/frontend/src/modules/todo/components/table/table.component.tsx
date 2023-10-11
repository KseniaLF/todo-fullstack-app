import React from 'react';
import { ITodo } from '../../../common/types/todos.type';
import { Table, TodoTitle } from './table.styled';
import { TodoTableElement } from './table-element';

export const TodoTable = ({ todos }: { todos: ITodo[] }) => (
  <Table>
    <thead>
      <tr>
        <TodoTitle>Todo Title</TodoTitle>
        <th>Description</th>
        <th>Actons</th>
      </tr>
    </thead>

    <tbody>
      {todos?.map((todo: ITodo) => (
        <tr key={todo.id}>
          <TodoTableElement todo={todo} />
        </tr>
      ))}
    </tbody>
  </Table>
);
