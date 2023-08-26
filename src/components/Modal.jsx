import React from "react";
import { styled } from "styled-components";
import TodoButton from "./TodoButton";
import todoAPI from "../api/todoAPI";
import { useRecoilState } from "recoil";
import checkChange from "../atom/checkChange";

const Modal = ({ id, setShowModal, setIsAlert, isAlert, modalText }) => {
  const { deleteTodo } = todoAPI();
  const [isChange, setIsChange] = useRecoilState(checkChange);
  console.log(isAlert);

  const handleCancle = () => {
    setShowModal(false);
  };

  const handleDelete = async () => {
    await deleteTodo(id);
    setIsChange((prev) => !prev);
  };

  const handleConfirm = () => {
    setIsAlert(false);
    setShowModal(false);
    setIsChange((prev) => !prev);
  };

  return (
    <SModalBg>
      <SModalLayout>
        <p>{isAlert ? modalText : "정말 삭제하시겠습니까?"}</p>
        {isAlert ? (
          <TodoButton
            children="확인"
            color="--primary-color"
            border="--primary-color"
            onClick={handleConfirm}
          />
        ) : (
          <SButtonWrap>
            <TodoButton
              children="삭제"
              color="--dark-600"
              onClick={handleDelete}
            />
            <TodoButton
              children="취소"
              color="--dark-600"
              onClick={handleCancle}
            />
          </SButtonWrap>
        )}
      </SModalLayout>
    </SModalBg>
  );
};

const SModalBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(26, 26, 37, 0.8);
  z-index: 10;
`;

const SModalLayout = styled.article`
  width: 20%;
  min-width: 240px;
  padding: 48px 24px 24px 24px;
  background-color: var(--dark-700);
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--dark-600);

  p {
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 1.6;
  }
`;

const SButtonWrap = styled.div`
  display: flex;
  flex-shrink: 0;
`;
export default Modal;
