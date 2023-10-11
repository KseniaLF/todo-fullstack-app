import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ITodo } from '../../../common/types/todos.type';
import { TodoElement } from '../todo-element';

export const TodoSwiper = ({ todos }: { todos: ITodo[] }) => (
  <div>
    <Swiper navigation modules={[Navigation]} slidesPerView={1} spaceBetween={5}>
      {todos?.map((todo: ITodo) => (
        <SwiperSlide key={todo.id}>
          <TodoElement todo={todo} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
