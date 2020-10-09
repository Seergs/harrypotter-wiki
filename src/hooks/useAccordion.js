import { useState, useReducer } from "react"

function useAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = newIndex => {
    if (newIndex === openIndex) setOpenIndex(-1)
    else setOpenIndex(newIndex)
  }

  return [openIndex, toggle]
}
export default useAccordion
