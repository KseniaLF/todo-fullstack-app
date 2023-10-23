import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ITodo, ITodos } from '../../../common/types/todos.type';
import { TodoElement } from '../todo-element';
import { useParamsHelper } from '../../hooks/search-params';

export const TodoSwiper = ({ todos, isMore }: ITodos) => {
  const { loadMore } = useParamsHelper();

  return (
    <div>
      <Swiper
        navigation
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={5}
        onReachEnd={isMore ? loadMore : undefined}
      >
        {todos?.map((todo: ITodo) => (
          <SwiperSlide key={todo.id}>
            <TodoElement todo={todo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
