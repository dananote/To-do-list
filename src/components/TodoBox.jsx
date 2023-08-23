import React from "react";
import { styled, css } from "styled-components";
import TodoButton from "./TodoButton";
import { useRecoilValue } from "recoil";
import checkMobile from "../atom/checkMobile";

const TodoBox = () => {
  const isMobile = useRecoilValue(checkMobile);
  return (
    <STodoBox isMobile={isMobile}>
      <SCheck />
      <STextWrap isMobile={isMobile}>
        <span>2023-08-23 13:00</span>
        <span>
          내용을 입력한 후, 오른쪽에 [할 일 추가]를 클랙해 주세요.내용을 입력한
          후, 오른쪽에 [할 일 추가]를 클랙해 주세요.내용을 입력한 후, 오른쪽에
          [할 일 추가]를 클랙해 주세요.
        </span>
      </STextWrap>
      <SButtonWrap>
        <TodoButton children="수정" color="--dark-700" />
        <TodoButton children="삭재" color="--dark-600" />
      </SButtonWrap>
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

export default TodoBox;
