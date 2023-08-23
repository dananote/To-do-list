import React from "react";
import { styled } from "styled-components";

const TodoButton = ({ children, type, color }) => {
  console.log(color);
  return (
    <STodoButton type={type ? type : "button"} color={color}>
      {children}
    </STodoButton>
  );
};

const STodoButton = styled.button`
  border: 1px solid var(--dark-600);
  background-color: var(${(props) => props.color});
  padding: 10px 16px;
  border-radius: 6px;
  color: white;

  & + & {
    margin-left: 12px;
  }
`;

export default TodoButton;
