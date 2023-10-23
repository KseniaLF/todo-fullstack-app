import React from 'react';
import { useMedia } from '../../../common/hooks/use-media';
import { ITodos } from '../../../common/types/todos.type';
import { TodoList } from '../todo-list/todo-list.component';
import { TodoSwiper } from '../swiper/swiper.component';
import { TodoTable } from '../table';
import { useGetTodos } from '../../hooks';

export const Todos = ({ isLoading: isLoad }: { isLoading: boolean }) => {
  const { isTablet, isMobile, isDesktop } = useMedia();
  const { todos: todosData, isLoading, isError } = useGetTodos();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  if (!isLoading && !todosData?.todos.length) return <p>There are no todos here.</p>;

  const { todos, isMore } = todosData;

  if (isMobile) return <TodoList todos={todos} isMore={isMore} isLoad={isLoad} />;

  if (isTablet) return <TodoSwiper todos={todos} isMore={isMore} />;

  if (isDesktop) return <TodoTable todos={todos} isMore={isMore} isLoad={isLoad} />;

  return null;
};
