import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    
    ${reset}

    :root {
        --primary-color: #FF6412;
        --dark-900: #1A1A25;
        --dark-800: #212031;
        --dark-700: #312F49;
        --dark-600: #656380;
        --dark-500: #908EAE;
        --save-color: #3932AD;
    }

    body {
        background-color: var(--dark-900);
        color: white;
    }

    h1 {
    font-size: 32px;
    font-weight: 900;
  }

    button {
    padding: 0;
    border: none;
    background-color: inherit;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
    }

    img {
      vertical-align: top;
    }

  /* blind */
    .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    }
`;

export default GlobalStyle;
