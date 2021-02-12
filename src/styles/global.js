import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{

        margin: 0;
        padding: 0;

    }

    body, input, button {
        font-family: 'nunito', sans-serif;
    }

    body, html, #root {

        height: 100vh;
    background-color: rgb(0, 0, 0);
    }


`;

export default GlobalStyle;