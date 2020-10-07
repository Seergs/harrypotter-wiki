import React from "react"
import ReactModal from "react-modal"
import theme from "../theme/theme"
const { colors } = theme

ReactModal.setAppElement("#___gatsby")

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,.2)",
  },
  content: {
    backgroundColor: colors.ultraDarkPurple,
    border: 0,
    top: "5rem",
    bottom: "5rem",
    left: "2rem",
    right: "2rem",
    color: "white",
  },
}

export default function Modal({ onClose, children }) {
  return (
    <ReactModal isOpen={true} onRequestClose={onClose} style={modalStyles}>
      {children}
    </ReactModal>
  )
}
