import React from "react"
import Page from "../components/page"
import Lightning from "../assets/lightning.png"
import theme from "../theme/theme"
import mixins from "../theme/mixins"
import styled, { css } from "styled-components"

const { flex, flexColumn, justifyCenter } = mixins
const { colors } = theme

const Title = styled.h2`
  text-align: center;
  margin: 2rem 0;
  color: white;
`

const Fact = styled.div`
  background-color: ${colors.darkPurple};
  ${flex};
  ${flexColumn};
  ${justifyCenter};
  padding: 2rem 1rem;
  border-radius: 5px;
  color: ${colors.lightestPurple};
  margin-bottom: 2rem;
`

const LightningImage = styled.img`
  ${props => css`
    ${props.isLeft &&
    css`
      align-self: flex-start;
    `}
    ${props.isRight &&
    css`
      align-self: flex-end;
    `}
  `}
`

const Button = styled.button`
  background-color: ${colors.lightPurple};
  border: 0;
  border-radius: 25px;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 52px;
  cursor: pointer;
`

export default function facts({ uri }) {
  return (
    <Page path={uri}>
      <Title>Here you have a fun fact</Title>
      <Fact>
        <LightningImage src={Lightning} alt="lightning" isLeft />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio
        reprehenderit ipsum sapiente expedita blanditiis ex labore recusandae
        repellat accusantium!
        <LightningImage src={Lightning} alt="lightning" isRight />
      </Fact>
      <Button>Get a new fun fact</Button>
    </Page>
  )
}
