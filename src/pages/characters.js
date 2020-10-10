import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Page from "../components/page"
import useAccordion from "../hooks/useAccordion"
import Accordion from "../components/accordion"

const Title = styled.h1`
  margin: 0 auto;
  margin-top: 2rem;
  color: white;
  font-weight: normal;

  max-width: 900px;
`
const Subtitle = styled.h2`
  color: white;
  font-weight: normal;
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 900px;
`

const Characters = ({ data, uri }) => {
  const [openIndex, toggle] = useAccordion()
  const allCharacters = data.allCharactersJson.edges.map(edge => edge.node)
  return (
    <Page path={uri}>
      <Title>CHARACTERS</Title>
      <Subtitle>(by last name)</Subtitle>
      {allCharacters.map((keyArray, index) => (
        <Accordion
          data={keyArray.characters}
          isOpen={openIndex === index}
          toggle={toggle}
          title={keyArray.key}
          key={keyArray.key}
          index={index}
        />
      ))}
    </Page>
  )
}

export const pageQuery = graphql`
  query CharactersPageQuery {
    allCharactersJson {
      edges {
        node {
          key
          characters {
            description
            name
          }
        }
      }
    }
  }
`

export default Characters
