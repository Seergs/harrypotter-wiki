import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import House from "../components/house"
import HouseCard from "../components/house-card"
import Modal from "../components/modal"
import Page from "../components/page"
import SortingButton from "../components/sorting-hat-button"
import useModal from "../hooks/useModal"
import mixins from "../theme/mixins"

const { flex, justifyAround } = mixins

const HousesWrapper = styled.div`
  ${flex};
  ${justifyAround};
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 4rem;
  gap: 1rem;
  max-width: 900px;
`
const IndexPage = ({ data, uri }) => {
  const [houseModal, openModal, closeModal] = useModal()

  const houses = data.allHousesJson.edges.map(edge => edge.node)
  const images = data.allImageSharp.edges.map(edge => edge.node.fluid)

  return (
    <>
      <Page path={uri}>
        <HousesWrapper>
          {houses.map(house => (
            <HouseCard
              key={house.houseName}
              name={house.houseName}
              image={images.find(image =>
                image.originalName.includes(house.houseName)
              )}
              onClick={() =>
                openModal(
                  houses.find(
                    singleHouse => singleHouse.houseName === house.houseName
                  )
                )
              }
            />
          ))}
        </HousesWrapper>
        <SortingButton />
      </Page>

      <Modal isOpen={houseModal} onClose={closeModal}>
        {houseModal && (
          <House values={houseModal.values}>
            <House.Name>{houseModal.houseName}</House.Name>
            <House.Values values={houseModal.values} />
            <House.Founder>{houseModal.founder}</House.Founder>
            <House.Description>{houseModal.description}</House.Description>
            <House.HeadHouse>{houseModal.headHouse}</House.HeadHouse>
            <House.Mascot>{houseModal.mascot}</House.Mascot>
            <House.Colors colors={houseModal.colors} />
            <House.Ghost>{houseModal.ghost}</House.Ghost>
          </House>
        )}
      </Modal>
    </>
  )
}

export const pageQuery = graphql`
  query HousePageQuery {
    allHousesJson {
      edges {
        node {
          houseName
          headHouse
          ghost
          founder
          description
          colors
          mascot
          values
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 200) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default IndexPage
