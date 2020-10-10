import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors } = theme

const globalStyles = createGlobalStyle`
    body{
        height: 100%;
        background-color: ${colors.purple};
        overflow-x:hidden;
    }

    * {
        font-family: 'Ruluko', sans-serif;
    }

    *,*:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${colors.lightestPurple};
    }

    ::-webkit-scrollbar-thumb {
        background: ${colors.lightPurple};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${colors.darkPurple};
    }
`

export default globalStyles
