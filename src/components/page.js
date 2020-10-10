import React from "react"
import styled from "styled-components"
import GlobalStyles from "../theme/global-styles"
import Header from "./header"
import Helmet from "react-helmet"

const StyledPage = styled.div`
  padding: 1rem;
`
const Page = ({ children, path }) => {
  return (
    <>
      <Helmet>
        <title>Harry Potter WIKI</title>
      </Helmet>
      <StyledPage>
        <GlobalStyles />
        <Header path={path} />
        {children}
      </StyledPage>
    </>
  )
}
export default Page
