import { useState } from "react"
import random from "../utils/random"

function useRandomFact(facts) {
  const [displayedFact, setDisplayedFact] = useState(
    facts[random(0, facts.length - 1)]
  )
  function getRandomFact() {
    return setDisplayedFact(facts[random(0, facts.length - 1)])
  }

  return { displayedFact, getRandomFact }
}
export default useRandomFact
