import React from "react";
import { styled } from "styled-components";

const TodoButton = ({ children, type, color, onClick, border }) => {
  return (
    <STodoButton
      type={type ? type : "button"}
      color={color}
      onClick={onClick}
      border={border}
    >
      {children}
    </STodoButton>
  );
};

const STodoButton = styled.button`
  border: 1px solid
    var(${(props) => (props.border ? props.border : "--dark-600")});
  background-color: var(${(props) => props.color});
  width: 100%;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
  transition: all 0.3s;

  & + & {
    margin-left: 12px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default TodoButton;
