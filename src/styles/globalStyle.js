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
   background-color: #f0f0f5;
 }

 @media(max-width: 425px) {
   html {
    font-size: 50%;
   }
 }
`