import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    font-family: 'Baloo 2', sans-serif;
    font-size: 16;
    font-weight: 400;
    line-height: 1.2;
  }
  #root { 
    position: relative;
    min-height: 100%; 
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;