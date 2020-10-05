import { createGlobalStyle } from "styled-components"
import theme from "./theme"
const { colors } = theme

const globalStyles = createGlobalStyle`
    body{
        height: 100%;
        background-color: ${colors.purple};
    }

    *,*:after, *:before {
        box-sizing: border-box;
    }
`

export default globalStyles
