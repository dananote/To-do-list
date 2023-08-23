import React from "react";
import { styled } from "styled-components";

const Input = ({ setTodo, todo }) => {
  const handleTodo = (e) => {
    const text = e.target.value;

    if (text.length > 50) {
      e.target.value = text.substr(0, 50);
      setTodo((prev) => ({
        ...prev,
        content: e.target.value,
      }));
    } else {
      setTodo((prev) => ({
        ...prev,
        content: e.target.value,
      }));
    }
  };

  return (
    <SInput
      onChange={handleTodo}
      value={todo.content}
      placeholder="내용을 입력한 후, 오른쪽에 [할 일 추가]를 클릭해 주세요."
    ></SInput>
  );
};

const SInput = styled.input`
  flex-grow: 4;
  color: white;
  padding: 24px;
  border-radius: 8px;
  background-color: var(--dark-80);
  border: 1px solid var(--dark-700);

  &::placeholder {
    color: var(--dark-600);
  }
`;

export default Input;
