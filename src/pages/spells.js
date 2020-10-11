import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Accordion from "../components/accordion"
import Page from "../components/page"
import useAccordion from "../hooks/useAccordion"

const Title = styled.h1`
  color: white;
  font-weight: normal;
  margin: 2rem auto;
  max-width: 900px;
`

export default function SpellsPage({ data, uri }) {
  const [openIndex, toggle] = useAccordion()
  const allSpells = data.allSpellsJson.edges.map(edge => edge.node)
  return (
    <Page path={uri}>
      <Title>ALL SPELLS</Title>
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
