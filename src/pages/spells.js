import Page from "../components/page"
import React from "react"
import styled from "styled-components"
import useAccordion from "../hooks/useAccordion"
import Accordion from "../components/accordion"
import { graphql } from "gatsby"

const Title = styled.h1`
  margin-top: 2rem;
  padding: 0 1rem;
  color: white;
  font-weight: normal;
  margin-bottom: 2rem;
`

export default function SpellsPage({ data, uri }) {
  const [openIndex, toggle] = useAccordion()
  const allSpells = data.allSpellsJson.edges.map(edge => edge.node)
  console.log(data)
  return (
    <Page path={uri}>
      <Title>SPELLS</Title>
      {allSpells.map((keyArray, index) => (
        <Accordion
          data={keyArray.spells}
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
  query SpellsPageQuery {
    allSpellsJson {
      edges {
        node {
          key
          spells {
            description
            name
          }
        }
      }
    }
  }
`
