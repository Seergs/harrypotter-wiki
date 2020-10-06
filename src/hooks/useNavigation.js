import { useState } from "react"
function useNavigation() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false)
  return [isNavigationOpen, setIsNavigationOpen]
}
export default useNavigation
