import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../theme/media_queries"
const Card = styled.button`
  height: 200px;
  width: 150px;
  background-color: white;
  border-radius: 3px;
  padding: 10px 3px;
  cursor: pointer;

  ${mediaQueries("md")`
    width: 200px;
    height: 250px;
  `}

  &:hover {
    filter: opacity(0.9);
  }
`
const CardTitle = styled.div`
  font-size: 25px;
  text-align: center;
`

export default function HouseCard({ name, onClick }) {
  return (
    <Card onClick={onClick}>
      <CardTitle>{name}</CardTitle>
    </Card>
  )
}
