import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        font-size: 16px;
    }
    
    *, *::before, *::after {
        box-sizing: inherit;
    }
    
    html, body, #root {
        height: 100vh;
        overflow: hidden;
    }
    
    * {
        font-family: inherit;
        margin: 0px;
        padding: 0px;
    border: 0px;
    outline: 0px;
    }
    

body,
input,
select,
textarea,
button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

a {
    -webkit-tap-highlight-color: #ff9b35;
}

::-moz-selection {
    background: #ff9b35;
    color: #fff;
    text-shadow: none;
}

::selection {
    background: #ff9b35;
    color: #fff;
    text-shadow: none;
}

img {
    -ms-interpolation-mode: bicubic;
}

strong {
    font-weight: bold;
}

em {
    font-style: italic;
}

.group:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
}

* html.group {
    height: 1%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: 600;
}

`;

export default ResetCss;
