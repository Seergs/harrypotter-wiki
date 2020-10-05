import React from "react"
import styled from "styled-components"
import Page from "../components/page"
import HouseCard from "../components/house-card"
import SortingButton from "../components/sorting-hat-button"
import mixins from "../theme/mixins"
import { graphql } from "gatsby"

const { flex, justifyAround } = mixins

const HousesWrapper = styled.div`
  ${flex};
  ${justifyAround};
  flex-wrap: wrap;
  margin-top: 4rem;
`
const IndexPage = ({ data }) => {
  const {
    allHousesJson: { edges },
  } = data
  const housesData = edges.map(edge => edge.node.houseName)
  return (
    <Page>
      <HousesWrapper>
        {housesData.map(house => (
          <HouseCard key={house} name={house} />
        ))}
      </HousesWrapper>
      <SortingButton />
    </Page>
  )
}

export const pageQuery = graphql`
  query HousePageQuery {
    allHousesJson {
      edges {
        node {
          houseName
        }
      }
    }
  }
`

export default IndexPage
