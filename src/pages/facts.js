import { graphql } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import Lightning from "../assets/lightning.png"
import Page from "../components/page"
import useRandomFact from "../hooks/useRandomFact"
import { mediaQueries } from "../theme/media_queries"
import mixins from "../theme/mixins"
import theme from "../theme/theme"

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
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 900px;
  line-height: 1.5;

  ${mediaQueries("md")`
    font-size: 26px;
    `}
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
  display: block;
  background-color: ${colors.lightPurple};
  border: 0;
  border-radius: 25px;
  color: white;
  font-size: 20px;
  width: 100%;
  height: 52px;
  cursor: pointer;
  transition: filter 0.1s ease-in-out;
  max-width: 900px;
  margin: 0 auto;

  &:hover {
    filter: brightness(1.1);
  }

  ${mediaQueries("md")`
    font-size: 22px;  
   `}
`

export default function Facts({ data, uri }) {
  const facts = data.allFactsJson.edges.map(edge => edge.node.fact)
  const { displayedFact, getRandomFact } = useRandomFact(facts)
  return (
    <Page path={uri}>
      <Title>Here you have a fun fact...</Title>
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
