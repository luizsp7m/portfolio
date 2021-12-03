import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   font-size: 62.5%;

   @media(max-width: 768px) {
     font-size: 50%;
   }
 }

 body, input, button {
  font-family: 'Rubik', sans-serif;
 }
 
 body {
   background-color: #2E4C6D;
  }
`