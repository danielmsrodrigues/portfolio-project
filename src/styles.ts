import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
html{
  scroll-behavior: smooth;
}

*, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

input, textarea, button, select{
  font-family: inherit;
}

ul{
  list-style-type: none;
}




body{
  position: relative;
    font-family: "Inter", "sans-serif";
    background-color: #121212;
    color: white;
    overflow-x: hidden;

    img{
      height: 5rem;
    }

    a{
      color: inherit;
      text-decoration: none;
    }

}

::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
  
}

::-webkit-scrollbar-thumb
{
	background-color: #000000;
}
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
