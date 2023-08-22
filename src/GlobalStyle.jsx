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
    }

    body {
        background-color: var(--dark-900);
        color: white;
    }
`;

export default GlobalStyle;
