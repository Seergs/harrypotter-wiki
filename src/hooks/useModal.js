import { useState } from "react"

function useModal() {
  const [houseModal, setHouseModal] = useState(null)

  const openModal = house => {
    setHouseModal(house)
  }

  const closeModal = () => {
    setHouseModal(null)
  }

  return [houseModal, openModal, closeModal]
}

export default useModal
