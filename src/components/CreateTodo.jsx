import React, { useState } from "react";
import { styled, css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useRecoilValue } from "recoil";
import checkMobile from "../atom/checkMobile";
import todoAPI from "../api/todoAPI";

const CreateTodo = () => {
  const isMobile = useRecoilValue(checkMobile);
  const { createTodo } = todoAPI();
  const [todo, setTodo] = useState({ content: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // createTodo(todoText);
    setTodo((prev) => ({
      ...prev,
      content: "",
    }));
  };

  return (
    <SCreateTodo isMobile={isMobile} onSubmit={handleSubmit}>
      <Input setTodo={setTodo} todo={todo} />
      <Button children="할 일 추가" disabled={todo.content} />
    </SCreateTodo>
  );
};

const SCreateTodo = styled.form`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}
`;

export default CreateTodo;
