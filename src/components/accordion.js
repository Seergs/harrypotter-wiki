import React from "react"
import styled from "styled-components"
import theme from "../theme/theme"
import mixins from "../theme/mixins"
import { motion, AnimatePresence } from "framer-motion"
const { colors } = theme
const { flex, justifyBetween, itemsCenter } = mixins

const Wrapper = styled.div`
  background-color: ${colors.darkPurple};
  color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-bottom: 1rem;
`

const Title = styled(motion.div)`
  background-color: ${colors.lightestPurple};
  padding: 0.8rem;
  ${flex};
  ${justifyBetween};
  ${itemsCenter};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
const Letter = styled.span`
  font-size: 28px;
`
const Container = styled(motion.div)`
  & > div:last-child p {
    padding-bottom: 1.5rem;
  }
`

const Name = styled.div`
  font-size: 20px;
  padding: 0 1rem;

  padding-top: 1.5rem;
`

const Description = styled.p`
  font-size: 18px;
  color: ${colors.gray};
  margin-top: 8px;
  padding: 0 1rem;
`

export default function Accordion({ isOpen, toggle, letter, data, index }) {
  return (
    <Wrapper>
      <Title
        initial={false}
        animate={{
          backgroundColor: isOpen ? colors.lightestPurple : colors.darkPurple,
        }}
        onClick={() => toggle(index)}
      >
        <Letter>{letter}</Letter>
        <motion.svg
          initial={false}
          animate={{
            rotate: isOpen ? 0 : 180,
          }}
          transition={{
            stiffness: 2,
          }}
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.59155 14.0915L11.0001 6.68149L18.4086 14.0915L21.5916 10.9085L11.0001 0.318493L0.40855 10.9085L3.59155 14.0915Z"
            fill="white"
          />
        </motion.svg>
      </Title>
      <AnimatePresence initial={false}>
        {isOpen && (
          <Container
            initial={animations.collapsed}
            animate={animations.open}
            exit={animations.collapsed}
            transition={{
              stiffness: 2,
            }}
          >
            {data.map(char => {
              return (
                <div key={char.name}>
                  <Name>{char.name}</Name>
                  <Description>{char.description}</Description>
                </div>
              )
            })}
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const animations = {
  collapsed: {
    height: 0,
    opacity: 0,
  },
  open: {
    height: "auto",
    opacity: 1,
  },
}