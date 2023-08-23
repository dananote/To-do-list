import React, { useState } from "react";
import { styled, css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import { useRecoilValue } from "recoil";
import checkMobile from "../atom/checkMobile";
import todoAPI from "../api/todoAPI";
import { useRecoilState } from "recoil";
import checkChange from "../atom/checkChange";

const CreateTodo = () => {
  const isMobile = useRecoilValue(checkMobile);
  const { createTodo } = todoAPI();
  const [todo, setTodo] = useState({ content: "" });
  const [isChange, setIsChange] = useRecoilState(checkChange);

  const newTodo = async () => {
    await createTodo(todo);
    setIsChange((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => ({
      ...prev,
      content: "",
    }));

    newTodo();
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
