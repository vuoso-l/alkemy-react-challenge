import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;  
    }

    img {
    max-width: 100%;
    }

    ul,
    ol {
    list-style-type: none;
    padding: 0px;
    }

    a {
    display: inline-block;
    text-decoration: none;
    color: white;
    }

    h1:first-letter,
    h2:first-letter,
    h3::first-letter,
    p:first-letter {
    text-transform: uppercase;
    }

    
`;
