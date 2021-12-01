import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   font-size: 62.5%;
 }

 body, input, button {
  font-family: 'Inter', sans-serif;
 }
 
 body {
   background-color: #2E4C6D;
   overflow-x: hidden;

   &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, .6);
    height: 10px;
  }
 }

 @media(max-width: 425px) {
   html {
    font-size: 50%;
   }
 }
`