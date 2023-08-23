import React from "react";
import { styled } from "styled-components";
import TodoButton from "./TodoButton";

const TodoBox = () => {
  return (
    <STodoBox>
      <SCheck />
      <STextWrap>
        <p>2023-08-23 13:00</p>
        <p>내용을 입력한 후, 오른쪽에 [할 일 추가]를 클랙해 주세요.</p>
      </STextWrap>
      <SButtonWrap>
        <TodoButton children="수정" color="--dark-700" />
        <TodoButton children="삭재" color="--dark-600" />
      </SButtonWrap>
    </STodoBox>
  );
};

const STodoBox = styled.section`
  width: 100%;
  padding: 24px;
  background-color: var(--dark-700);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  gap: 24px;

  & + & {
    margin-top: 24px;
  }
`;

const SCheck = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid var(--primary-color);
  border-radius: 50px;
`;

const STextWrap = styled.div`
  flex-grow: 3;
  p:nth-child(1) {
    color: var(--dark-600);
    font-size: 12px;
    margin-bottom: 6px;
  }
`;

const SButtonWrap = styled.div``;

export default TodoBox;
