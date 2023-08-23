import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import TodoBox from "./TodoBox";
import todoAPI from "../api/todoAPI";
import { useRecoilValue, useRecoilState } from "recoil";
import checkChange from "../atom/checkChange";
import checkCount from "../atom/checkCount";

// 날짜 표식

const TodoList = () => {
  const { getTodo } = todoAPI();
  const [todo, setTodo] = useState([]);
  const isChange = useRecoilValue(checkChange);
  const [isCount, setIsCount] = useRecoilState(checkCount);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const result = await getTodo();
    setTodo(result.value.reverse());
    setIsCount(result.count);
  };

  useEffect(() => {
    getData();
  }, [isChange]);

  return (
    <STodoList>
      {todo.length === 0 ? (
        <SMessage>등록된 [할 일]이 없습니다.</SMessage>
      ) : (
        todo?.map((el) => {
          return (
            <TodoBox
              key={el.id}
              id={el.id}
              content={el.content}
              date={el.createdDateTime}
              isCompleted={el.isCompleted}
            />
          );
        })
      )}
    </STodoList>
  );
};

const STodoList = styled.ul`
  margin-top: 48px;
  max-height: 400px;
  overflow: scroll;
`;

const SMessage = styled.div`
  color: var(--dark-600);
  text-align: center;
`;

export default TodoList;
