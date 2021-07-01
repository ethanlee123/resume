import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Exo 2', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    scroll-behavior: smooth;
    background-color: #EBEBEB;
  }
  .button {
    color: #fff;
    border-radius: 8px;
    border: 2px solid #904E55;
    background-color: #904E55;;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    transition: all 290ms ease-in-out;
    :hover {
      background-color: #EBEBEB;
      color: #904E55;
    }
  }
  .rectangle {
    height: 10px;
    width: 100px;
    background-color: #555;
  }
  .title {
    @media screen and (max-width: 640px) { 
      font-size: 3rem;
    }
    @media screen and (min-width: 1008px) { 
      font-size: 5rem;
    }
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
  }
  .heading {
    @media screen and (max-width: 640px) { 
      font-size: 2.5rem;
    }
    @media screen and (min-width: 1008px) { 
      font-size: 3rem;
    }
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    color: #fff;
  }
  .subheading {
    @media screen and (max-width: 640px) { 
      font-size: 1rem;
    }
    @media screen and (min-width: 1008px) { 
      font-size: 2.5rem;
    }
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
  }
  .text {
    font-size: 1.3rem;
    @media screen and (max-width: 640px) {
    font-size: 1.1rem;
    }
  }
`
