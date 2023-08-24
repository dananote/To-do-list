import React, { useEffect, useState, useRef } from "react";
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
  const ismobile = useRecoilValue(checkMobile);
  const [isupdate, setIsupdate] = useState(false);
  const updateInput = useRef();
  const [changeTodo, setChangeTodo] = useState({
    content: "",
    isCompleted: "",
  });

  const handleDelete = async (id) => {
    const check = window.confirm("정말 삭제하시겠습니까?");

    if (check) {
      await deleteTodo(id);
      setIsChange((prev) => !prev);
    }
  };

  const handleComplet = () => {
    setChangeTodo((prev) => {
      const updateTodoData = {
        ...prev,
        content: content,
        isCompleted: !prev.isCompleted,
      };

      if (updateTodoData) {
        handleSubmit(updateTodoData);
      }

      return updateTodoData;
    });
  };

  const handleSubmit = async (updateTodoData) => {
    await updateTodo(updateTodoData, id);
    setIsupdate(false);
    setIsChange((prev) => !prev);
  };

  const inputText = (e) => {
    setChangeTodo((prev) => ({
      ...prev,
      content: e.target.value,
    }));
  };

  const handleCancle = () => {
    setChangeTodo((prev) => ({
      ...prev,
      content: content,
    }));
    setIsupdate(false);
  };

  const handleChange = () => {
    setIsupdate(true);
    setChangeTodo((prev) => ({
      ...prev,
      content: content,
    }));
  };

  useEffect(() => {
    setChangeTodo((prev) => ({
      ...prev,
      content: content,
      isCompleted: isCompleted,
    }));
    if (isupdate) {
      updateInput.current.focus();
    }
  }, [isupdate, isChange]);

  return (
    <STodoBox ismobile={ismobile} isupdate={isupdate}>
      <SCheck isCompleted={isCompleted} onClick={handleComplet} />
      <STextWrap ismobile={ismobile} isCompleted={isCompleted}>
        <span>{date}</span>
        {isupdate ? (
          <SUpdateInput
            ref={updateInput}
            onChange={inputText}
            value={changeTodo.content}
          />
        ) : (
          <span>{content}</span>
        )}
      </STextWrap>
      {isupdate ? (
        <SButtonWrap>
          <TodoButton
            children="저장"
            color="--primary-color"
            onClick={() => {
              handleSubmit(changeTodo);
            }}
            border="--primary-color"
            disabled={
              changeTodo.content === "" || changeTodo.content === content
            }
          />
          <TodoButton
            children="취소"
            color="--dark-600"
            onClick={handleCancle}
          />
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
  border: ${(props) =>
    props.isupdate ? "1.5px solid var(--dark-600)" : "none"};

  & + & {
    margin-top: 24px;
  }

  ${(props) =>
    props.ismobile &&
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
    props.ismobile &&
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

const SUpdateInput = styled.textarea`
  width: 100%;
  background-color: var(--dark-700);
  color: white;
  font-size: 16px;
  border: none;
  outline-color: var(--dark-700);
  resize: none;
  font-size: 17px;

  &:focus {
    outline: 0;
  }
`;

export default TodoBox;
