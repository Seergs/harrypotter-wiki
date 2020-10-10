import React, { useRef } from "react"
import theme from "../theme/theme"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import useClickOutside from "../hooks/useClickOutside"
const { colors } = theme

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
const Content = styled(motion.div)`
  position: absolute;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${colors.ultraDarkPurple};
  top: 2rem;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 3rem 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px hsla(0, 0%, 0%, 0.2);
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
`

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.1);
  }
`

export default function Modal({ isOpen, onClose, children }) {
  const ref = useRef()

  useClickOutside(ref, onClose)
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          initial="initial"
          animate="isOpen"
          exit="close"
        >
          <Content variants={contentVariants} ref={ref}>
            <CloseButton onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.39 20.39">
                <title>close</title>
                <line
                  x1="19.39"
                  y1="19.39"
                  x2="1"
                  y2="1"
                  fill="none"
                  stroke={colors.gray}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
                <line
                  x1="1"
                  y1="19.39"
                  x2="19.39"
                  y2="1"
                  fill="none"
                  stroke={colors.gray}
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                />
              </svg>
            </CloseButton>
            {children}
          </Content>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  isOpen: {
    opacity: 1,
  },
  close: {
    opacity: 1,
  },
}
const contentVariants = {
  initial: {
    y: "-100%",
  },
  isOpen: {
    y: 0,
  },
  close: {
    y: "-100%",
    transition: {
      stiffness: 2,
    },
  },
}
