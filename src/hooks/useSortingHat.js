import { useReducer } from "react"

function hatReducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: "loading",
      }
    case "ready":
      return {
        ...state,
        status: "success",
        house: action.payload,
      }
    case "clear":
      return {
        ...state,
        house: null,
      }
    default:
      return state
  }
}

const initialState = {
  status: "idle",
  house: null,
}
function useSortingHat() {
  const [{ status, house }, dispatch] = useReducer(hatReducer, initialState)
  const isLoading = status === "loading"

  function getHouse() {
    dispatch({ type: "clear" })
    dispatch({ type: "loading" })
    setTimeout(() => {
      dispatch({ type: "ready", payload: getRandomHouse() })
    }, 3000)
  }

  return {
    house,
    isLoading,
    getHouse,
  }
}

export default useSortingHat

const houses = ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"]
const getRandomHouse = () => {
  return houses[Math.floor(Math.random() * 4)]
}
