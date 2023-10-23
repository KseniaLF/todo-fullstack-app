import React from 'react';
import { ITodo, ITodos } from '../../../common/types/todos.type';
import { Pagination, Table, TodoTitle } from './table.styled';
import { TodoTableElement } from './table-element';
import { useParamsHelper } from '../../hooks/search-params';
import { Button } from '../../../theme/common.styled';

export const TodoTable = ({ todos, isMore, isLoad }: ITodos) => {
  const { loadMore, isPrev, currentPage, prevPage } = useParamsHelper();

  return (
    <>
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

      <Pagination>
        <Button
          type="button"
          onClick={() => {
            prevPage();
          }}
          disabled={!isPrev || isLoad}
        >
          {isLoad ? 'loading...' : 'prev page'}
        </Button>

        <p>{currentPage}</p>

        <Button type="button" onClick={loadMore} disabled={!isMore || isLoad}>
          {isLoad ? 'loading...' : 'next page'}
        </Button>
      </Pagination>
    </>
  );
};
