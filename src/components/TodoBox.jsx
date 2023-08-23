import React, { useEffect, useState } from "react";
import { styled, css } from "styled-components";
import TodoButton from "./TodoButton";
import { useRecoilValue } from "recoil";
import checkMobile from "../atom/checkMobile";
import checkd from "../asset/check.png";
import todoAPI from "../api/todoAPI";
import { useRecoilState } from "recoil";
import checkChange from "../atom/checkChange";

const TodoBox = ({ content, date, isCompleted, id }) => {
  const { deleteTodo, updateTodo } = todoAPI();
  const [isChange, setIsChange] = useRecoilState(checkChange);
  const isMobile = useRecoilValue(checkMobile);
  const [isUpdate, setIsUpdate] = useState(true);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setIsChange((prev) => !prev);
  };

  const handleComplete = async (id, content, isCompleted) => {
    const changeTodo = { content: content, isCompleted: !isCompleted };
    await updateTodo(changeTodo, id);
    setIsChange((prev) => !prev);
  };

  const handleChange = () => {
    setIsUpdate((prev) => !prev);
  };

  return (
    <STodoBox isMobile={isMobile} isUpdate={isUpdate}>
      <SCheck
        isCompleted={isCompleted}
        onClick={() => {
          handleComplete(id, content, isCompleted);
        }}
      />
      <STextWrap isMobile={isMobile} isCompleted={isCompleted}>
        <span>{date}</span>
        {isUpdate ? <SUpdateInput value={content} /> : <span>{content}</span>}
      </STextWrap>
      {isUpdate ? (
        <SButtonWrap>
          <TodoButton
            children="저장"
            color="--primary-color"
            onClick={handleChange}
          />
          <TodoButton children="취소" color="--dark-600" onClick={() => {}} />
        </SButtonWrap>
      ) : (
        <SButtonWrap>
          <TodoButton
            children="수정"
            color="--dark-700"
            onClick={handleChange}
          />
          <TodoButton
            children="삭제"
            color="--dark-600"
            onClick={() => {
              handleDelete(id);
            }}
          />
        </SButtonWrap>
      )}
    </STodoBox>
  );
};

const STodoBox = styled.li`
  width: 100%;
  padding: 24px;
  background-color: var(--dark-700);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 24px;
  border: ${(props) => (props.isUpdate ? "1px solid var(--dark-600)" : "none")};

  & + & {
    margin-top: 24px;
  }

  ${(props) =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}
`;

const SCheck = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border: 1px solid var(--primary-color);
  border-radius: 50px;
  cursor: pointer;

  ${(props) =>
    props.isCompleted &&
    css`
      background: no-repeat center/cover url(${checkd}) var(--primary-color);
    `}
`;

const STextWrap = styled.div`
  flex-grow: 1;
  flex-shrink: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;

  span:nth-child(1) {
    display: block;
    color: var(--dark-600);
    font-size: 12px;
    margin-bottom: 8px;
  }

  span:nth-child(2) {
    color: ${(props) => (props.isCompleted ? "var(--dark-600)" : "white")};
    text-decoration: ${(props) =>
      props.isCompleted ? "line-through" : "none"};
  }

  ${(props) =>
    props.isMobile &&
    css`
      white-space: pre-wrap;

      span:nth-child(2) {
        line-height: 1.6;
      }
    `}
`;

const SButtonWrap = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const SUpdateInput = styled.input`
  width: 100%;
  background-color: var(--dark-700);
  color: white;
  font-size: 16px;
`;

export default TodoBox;