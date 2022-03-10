import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
  }

  #root {
      margin: 0 auto;
  }

  html {
    /* font-size: 62.5%; */
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      display: 'flex';
      align-items: 'center';
      justify-content:'center';
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
