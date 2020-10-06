import React from "react"
import ReactModal from "react-modal"

ReactModal.setAppElement("#___gatsby")

export default function Modal({ houseData: { houseName }, onClose }) {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,.5)",
        },
      }}
    >
      {houseName}
    </ReactModal>
  )
}
