import { createGlobalStyle } from 'styled-components';
import Colors from "./Colors";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color: ${Colors.bg_color};
        height: 100vh;
    }
`
