import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Page from "../components/page"
import useAccordion from "../hooks/useAccordion"
import Accordion from "../components/accordion"

const Title = styled.h1`
  margin-top: 2rem;
  padding: 0 1rem;
  color: white;
  font-weight: normal;
`
const Subtitle = styled.h2`
  color: white;
  font-weight: normal;
  padding: 0 1rem;
  margin-bottom: 2rem;
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
          letter={keyArray.key}
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
