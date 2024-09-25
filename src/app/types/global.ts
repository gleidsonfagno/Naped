"use client";
import { createGlobalStyle } from "styled-components";
// import { defaultTheme } from "./themes/default.ts";

export const Globalstyle = createGlobalStyle`

  :root {
    /* Variáveis já definidas aqui */
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Rubik', sans-serif ;

    --font-weight-regular: 400;
    --font-weight-medium: 500;

    --font-size-h1: 48px;
    --font-size-h2: 40px;
    --font-size-h3: 24px;
    --font-size-lead: 24px;

    --font-size-body-large: 20px;
    --font-size-body-medium: 18px;
    --font-size-body-normal: 16px;

    --line-height-tight: 110%;
    --line-height-medium: 120%;
    --line-height-relaxed: 160%;
    --line-height-loose: 170%;
  }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.DARCK_100};
        color: ${(props) => props.theme.WHITE};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }

    body, h1, h2, input, button, p{
        font-family: var(--font-body);
        /* font-family: 'Inter', sans-serif;  */
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

    h1 {
      font-size: 40px;  /* Ajuste para tablet */
    }

    h2 {
      font-size: 32px;  /* Ajuste para tablet */
    }

    h3 {
      font-size: 20px;  /* Ajuste para tablet */
    }

    p, span, a, li {
      font-size: 16px;  /* Ajuste para tablet */
    }
   /* Tablet (768px - 1024px) */
  /* @media (max-width: 1024px) {
    
  } */

  /* Mobile (menor que 768px) */
  @media (max-width: 768px) {
    h1 {
      font-size: 32px;  /* Ajuste para mobile */
    }

    h2 {
      font-size: 28px;  /* Ajuste para mobile */
    }

    h3 {
      font-size: 18px;  /* Ajuste para mobile */
    }

    p, span, a, li {
      font-size: 14px;  /* Ajuste para mobile */
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 28px !important;  /* Ajuste para mobile */
    }

    h2 {
      font-size: 20px !important;  /* Ajuste para mobile */
    }

    h3 {
      font-size: 18px !important;  /* Ajuste para mobile */
    }

    p, span, a, li {
      font-size: 14px !important;  /* Ajuste para mobile */
    }
  }
`;
