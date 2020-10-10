import React from "react"
import styled from "styled-components"
import useNavigation from "../hooks/useNavigation"
import theme from "../theme/theme"
import Navigation from "./navigation"

const { colors } = theme

const Wrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;

  &:hover > div {
    background-color: white;
  }
`
const Line = styled.div`
  width: 34px;
  height: 4px;
  background-color: ${colors.gray};
  transition: all 0.1s linear;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export default function Hamburger({ path }) {
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
        path={path}
      />
    </>
  )
}
