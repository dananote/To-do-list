import React, { useState } from "react";
import { styled, css } from "styled-components";
import Input from "./Input";
import Button from "./Button";
import checkMobile from "../atom/checkMobile";
import todoAPI from "../api/todoAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import checkCount from "../atom/checkCount";
import checkChange from "../atom/checkChange";

const CreateTodo = () => {
  const isMobile = useRecoilValue(checkMobile);
  const isCount = useRecoilValue(checkCount);
  const { createTodo } = todoAPI();
  const [todo, setTodo] = useState({ content: "" });
  const [isChange, setIsChange] = useRecoilState(checkChange);

  const newTodo = async () => {
    await createTodo(todo);
    setIsChange((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCount === 10) {
      alert("[할 일]은 최대 10개까지 등록할 수 있습니다.");
    } else {
      setTodo((prev) => ({
        ...prev,
        content: "",
      }));

      newTodo();
    }
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
