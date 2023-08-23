import React from "react";
import { styled, css } from "styled-components";

const Layout = styled.article`
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 60px;
  background-color: var(--dark-800);
  border-radius: 20px;
  box-sizing: border-box;

  ${(props) =>
    props.isMobile &&
    css`
      width: 100%;
      height: 100vh;
      padding: 80px 24px;
      background-color: var(--dark-800);
      border-radius: 0;
    `}
`;

export default Layout;
