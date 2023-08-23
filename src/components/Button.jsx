import React from "react";
import { styled } from "styled-components";

const Button = ({ type, children, onClick, disabled }) => {
  return (
    <SButton
      onClick={onClick}
      type={type ? type : "submit"}
      disabled={disabled ? false : true}
    >
      {children}
    </SButton>
  );
};

const SButton = styled.button`
  flex-grow: 1;
  padding: 24px 0;
  background-color: var(--primary-color);
  border-radius: 12px;
  color: white;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: var(--dark-700);
    color: var(--dark-600);
  }
`;

export default Button;
