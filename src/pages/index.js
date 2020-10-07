import React from "react"
import styled from "styled-components"
import Page from "../components/page"
import HouseCard from "../components/house-card"
import SortingButton from "../components/sorting-hat-button"
import mixins from "../theme/mixins"
import useModal from "../hooks/useModal"
import Modal from "../components/modal"
import House from "../components/house"
import { graphql } from "gatsby"

const { flex, justifyAround } = mixins

const HousesWrapper = styled.div`
  ${flex};
  ${justifyAround};
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 1rem;
`
const IndexPage = ({ data }) => {
  const [houseModal, openModal, closeModal] = useModal()

  const houses = data.allHousesJson.edges.map(edge => edge.node)

  return (
    <>
      <Page>
        <HousesWrapper>
          {houses.map(house => (
            <HouseCard
              key={house.houseName}
              name={house.houseName}
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

      <Modal isOpen={houseModal !== null} onClose={closeModal}>
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
  }
`

export default IndexPage
