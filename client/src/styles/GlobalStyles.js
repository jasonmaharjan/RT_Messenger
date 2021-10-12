import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --font-primary: ${(props) => props.theme["font-primary"]};
        --primary: ${(props) => props.theme["primary"]};
        --secondary: ${(props) => props.theme["secondary"]};
        --background: ${(props) => props.theme["background"]};
        --grey-light: ${(props) => props.theme["grey-light"]};
        --grey-m: ${(props) => props.theme["grey-m"]};
        --grey-hover: ${(props) => props.theme["grey-hover"]};
        --grey-m-dark: ${(props) => props.theme["grey-m-dark"]};
        --grey-dark: ${(props) => props.theme["grey-dark"]};
        --grey-darker: ${(props) => props.theme["grey-darker"]};
        --primary: ${(props) => props.theme["primary"]};
        --primary-dark: ${(props) => props.theme["primary-dark"]};
        --green: ${(props) => props.theme["green"]};
        --purple: ${(props) => props.theme["purple"]};
        --highlight: ${(props) => props.theme["highlight"]};
        --hsl-light: ${(props) => props.theme["hsl-light"]};
        --hsl-dark:${(props) => props.theme["hsl-dark"]};
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
      overflow: hidden;
    }
`;

export default GlobalStyles;
