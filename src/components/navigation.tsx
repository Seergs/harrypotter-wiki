import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import mixins from "../theme/mixins"
import theme from "../theme/theme"

const { flex, flexColumn } = mixins

const { colors } = theme
const Menu = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  ${flex};
  ${flexColumn};
  background-color: ${colors.darkPurple};
  padding: 3rem;
`

const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  align-self: flex-end;
  margin-bottom: 3rem;
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.1);
  }
`

interface LinkItemProps {
  $isActive: boolean
}
const LinkItem = styled(Link)<LinkItemProps>`
  display: block;
  text-align: center;
  color: white;
  font-size: 36px;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${colors.gray};
    `}
`

export default function Navigation({
  isNavigationOpen,
  setIsNavigationOpen,
  path,
}) {
  return (
    <AnimatePresence>
      {isNavigationOpen && (
        <Menu
          initial={animations.initial}
          animate={animations.animate}
          exit={animations.exit}
        >
          <CloseButton onClick={() => setIsNavigationOpen(false)}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="34"
                height="4"
                transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 3.39343 27.435)"
                fill="#C4C4C4"
              />
              <rect
                width="34"
                height="4"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.4351 24.6066)"
                fill="#C4C4C4"
              />
            </svg>
          </CloseButton>
          <Navigation.Link path="/" currentPath={path}>
            houses
          </Navigation.Link>
          <Navigation.Link path="/characters" currentPath={path}>
            characters
          </Navigation.Link>
          <Navigation.Link path="/spells" currentPath={path}>
            spells
          </Navigation.Link>
          <Navigation.Link path="/facts" currentPath={path}>
            fun facts
          </Navigation.Link>
        </Menu>
      )}
    </AnimatePresence>
  )
}

Navigation.Link = function ({ path, currentPath, children }) {
  return (
    <LinkItem to={path} $isActive={path === currentPath}>
      {children}
    </LinkItem>
  )
}

const animations = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      stiffness: 2,
    },
  },
  exit: {
    x: "100%",
    transition: {
      stiffness: 2,
    },
  },
}
