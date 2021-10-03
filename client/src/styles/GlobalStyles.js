import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --font-primary: "ink free", monospace;
        --primary: #f3a1a1;
        --secondary: #cc1515;    
        --background: #595a5c;
        --grey-light: #e5e6e7;
        --grey-m: #707070;
        --grey-m-dark: #383841;
        --grey-dark: #292930;
        --grey-darker: #1c1b21;
        --primary: #0cd1ef;
        --primary-dark: #0c7b8c;
        --green: #1ac200;
        --purple: #9100ff;
        --highlight: #797979;
    }
        
    *{
        margin: 0;
        padding: 0;
        line-height: 1.6;
        box-sizing: border-box;
        font-size: 1.1rem;
        font-family: var(--font-primary);
        color: white;
    }

    body { 
      margin: 0;
      padding: 0;
      line-height: 1.6;
      font-family: "ink free", monospace;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: var(--background);
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }
    
    #root {
      height: 100vh;
      overflow-y: auto;
    }
`;

export default GlobalStyles;
