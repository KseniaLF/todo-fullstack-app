import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../theme';
import 'react-toastify/dist/ReactToastify.css';
import { FAMILIES } from '../theme/fonts.const';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    font-family: ${FAMILIES.normal};
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${COLORS.white};
  }

  ul,
  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  `;
