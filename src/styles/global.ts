import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    /* font-size: 62.5%; */
    font-size: 16px;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
      
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, ol, ul {
    margin: 0;
    padding: 0;
    outline: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  #root {
    margin: 0 auto;
  }
`;

/*
$s-size: 1.2rem;
$m-size: 1.6rem;
$l-size: 3.2rem;
$xl-size: 4.8rem;

html {
  font-size: 62.5%; /* 62.5% of 16px = 10px 
*/
