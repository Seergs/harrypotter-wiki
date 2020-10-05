import React from "react"
import styled from "styled-components"
import theme from "../theme/theme"

const { colors } = theme

const Wrapper = styled.div``
const Line = styled.div`
  width: 30px;
  height: 4px;
  background-color: ${colors.gray};
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

export default function Hamburger() {
  return (
    <Wrapper>
      <Line />
      <Line />
      <Line />
    </Wrapper>
  )
}
