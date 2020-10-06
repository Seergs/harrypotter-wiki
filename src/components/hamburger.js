import React from "react"
import styled from "styled-components"
import theme from "../theme/theme"
import useNavigation from "../hooks/useNavigation"
import Navigation from "./navigation"

const { colors } = theme

const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
`
const Line = styled.div`
  width: 34px;
  height: 4px;
  background-color: ${colors.gray};
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export default function Hamburger() {
  const [isNavigationOpen, setIsNavigationOpen] = useNavigation()

  return (
    <>
      <Wrapper onClick={() => setIsNavigationOpen(true)}>
        <Line />
        <Line />
        <Line />
      </Wrapper>
      <Navigation
        isNavigationOpen={isNavigationOpen}
        setIsNavigationOpen={setIsNavigationOpen}
      />
    </>
  )
}
