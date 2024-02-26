import { createGlobalStyle } from "styled-components";
// import { defaultTheme } from "./themes/default";

export const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.DARCK_100};
        color: ${props => props.theme.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, h1, h2, input, button, p{
        font-family: "Archivo", sans-serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.8);
    }
`