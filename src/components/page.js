import React from "react"
import GlobalStyles from "../theme/global-styles"
import Header from "./header"
import styled from "styled-components"

const StyledPage = styled.div`
  padding: 1rem;
`
const Page = ({ children, path }) => {
  return (
    <StyledPage>
      <GlobalStyles />
      <Header path={path} />
      {children}
    </StyledPage>
  )
}
export default Page
