import React from "react";
import { styled } from "styled-components";
import CreateTodo from "../components/CreateTodo";
import TodoBox from "../components/TodoBox";

const Todo = () => {
  return (
    <>
      <h1>Todo</h1>
      <SSubText>오늘 당신이 해야할 일을 체크해주세요!</SSubText>
      <CreateTodo />
      <TodoBox />
    </>
  );
};

const SSubText = styled.p`
  color: var(--dark-500);
  margin: 12px 0 32px 0;
`;

export default Todo;
