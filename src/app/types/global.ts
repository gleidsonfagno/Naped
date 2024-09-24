"use client" 
import { createGlobalStyle } from "styled-components";
// import { defaultTheme } from "./themes/default.ts";

export const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&family=Rubik:wght@400&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.DARCK_100} !important;
        color: ${(props) => props.theme.WHITE};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    body, h1, h2, input, button, p{
        font-family: 'Rubik', sans-serif;
        font-size: var(--font-size-base) ;
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

`;