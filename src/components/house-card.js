import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme/media_queries"
import Image from "gatsby-image"
import theme from "../theme/theme"
const { colors } = theme
const Card = styled.button`
  width: 150px;
  color: white;
  border: 0;
  background-color: ${colors.darkPurple};
  border-radius: 3px;
  padding: 10px 3px;
  cursor: pointer;
  padding: 1rem;

  ${mediaQueries("md")`
    width: 200px;
  `}

  &:hover {
    filter: opacity(0.9);
  }
`
const CardTitle = styled.div`
  font-size: 25px;
  text-align: center;
  margin-bottom: 1rem;

  ${mediaQueries("md")`
    font-size: 30px;
  `}
`

export default function HouseCard({ name, onClick, image }) {
  return (
    <Card onClick={onClick}>
      <CardTitle>{name}</CardTitle>
      <Image fluid={image} />
    </Card>
  )
}
