import React from "react"
import styled from "styled-components"

const Card = styled.div`
  height: 200px;
  width: 150px;
  background-color: white;
  border-radius: 3px;
  padding: 10px 3px;
  cursor: pointer;
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
