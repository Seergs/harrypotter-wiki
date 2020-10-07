import React from "react"
import styled, { css } from "styled-components"
import theme from "../theme/theme"
import mixins from "../theme/mixins"
import { AnimatePresence, motion } from "framer-motion"
const { colors } = theme
const { flex, justifyAround, justifyCenter, itemsCenter } = mixins

const Wrapper = styled.div`
  color: white;
`
const HouseName = styled.h4`
  text-align: center;
  font-size: 32px;
`
const HouseSubtitle = styled.div`
  color: ${colors.lightestPurple};
  text-align: center;
  font-size: 22px;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const ValuesContainer = styled.div`
  ${flex};
  ${justifyAround};
  flex-wrap: wrap;
  row-gap: 0.5rem;
`

const Founder = styled.div`
  text-align: center;
  margin: 1rem 0 2rem 0;
  color: ${colors.gray};
`

const Description = styled.p`
  color: ${colors.gray};
  line-height: 1.6;
`

const HeadHouse = styled.div`
  text-align: center;
`
const Mascot = styled.div`
  text-align: center;
`

const Colors = styled.div`
  ${flex};
  ${justifyCenter};
`

interface ColorProps {
  colorCode: string
}

const SingleColor = styled.span<ColorProps>`
  ${props => css`
    display: block;
    height: 60px;
    width: 60px;
    ${flex};
    ${justifyCenter};
    ${itemsCenter};
    &:first-child {
      margin-right: 1rem;
    }
    ${props.colorCode === "bronze"
      ? css`
          background-color: maroon;
        `
      : css`
          background-color: ${props.colorCode};
        `}

    ${(props.colorCode === "yellow" ||
      props.colorCode === "gold" ||
      props.colorCode === "silver") &&
    css`
      color: black;
    `}
  `}
`
const Ghost = styled.div`
  text-align: center;
`

export default function House({ children }) {
  return (
    <AnimatePresence>
      <Wrapper>{children}</Wrapper>
    </AnimatePresence>
  )
}

House.Name = function ({ children }) {
  return <HouseName>{children}</HouseName>
}

House.Values = function ({ values }) {
  return (
    <>
      <HouseSubtitle>VALUES</HouseSubtitle>
      <ValuesContainer>
        {values.map(value => (
          <span key={value}>{value}</span>
        ))}
      </ValuesContainer>
    </>
  )
}

House.Founder = function ({ children }) {
  return <Founder>Founded by {children}</Founder>
}

House.Description = function ({ children }) {
  return <Description>{children}</Description>
}

House.HeadHouse = function ({ children }) {
  return (
    <>
      <HouseSubtitle>HEAD HOUSE</HouseSubtitle>
      <HeadHouse>Head house is {children}</HeadHouse>
    </>
  )
}

House.Mascot = function ({ children }) {
  return (
    <>
      <HouseSubtitle>MASCOT</HouseSubtitle>
      <Mascot>The mascot of this house is the {children}</Mascot>
    </>
  )
}

House.Colors = function ({ colors }) {
  return (
    <>
      <HouseSubtitle>COLORS</HouseSubtitle>
      <Colors>
        {colors.map(color => (
          <SingleColor key={color} colorCode={color}>
            {color}
          </SingleColor>
        ))}
      </Colors>
    </>
  )
}

House.Ghost = function ({ children }) {
  return (
    <>
      <HouseSubtitle>GHOST</HouseSubtitle>
      <Ghost>The ghost of this house is {children}</Ghost>
    </>
  )
}
