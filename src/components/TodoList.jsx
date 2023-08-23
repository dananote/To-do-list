import React from "react";
import { styled } from "styled-components";
import TodoBox from "./TodoBox";

const TodoList = () => {
  return (
    <STodoList>
      <TodoBox />
    </STodoList>
  );
};

const STodoList = styled.ul`
  margin-top: 48px;
`;

export default TodoList;
