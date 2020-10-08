import React from "react"
import Page from "../components/page"
import Lightning from "../assets/lightning.png"
import theme from "../theme/theme"
import mixins from "../theme/mixins"
import styled, { css } from "styled-components"
import useRandomFact from "../hooks/useRandomFact"
import { graphql } from "gatsby"

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
  color: ${colors.gray};
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

export default function Facts({ data, uri }) {
  const facts = data.allFactsJson.edges.map(edge => edge.node.fact)
  const { displayedFact, getRandomFact } = useRandomFact(facts)
  return (
    <Page path={uri}>
      <Title>Here you have a fun fact</Title>
      <Fact>
        <LightningImage src={Lightning} alt="lightning" isLeft />
        {displayedFact}
        <LightningImage src={Lightning} alt="lightning" isRight />
      </Fact>
      <Button onClick={getRandomFact}>Get a new fun fact</Button>
    </Page>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allFactsJson {
      edges {
        node {
          fact
        }
      }
    }
  }
`
