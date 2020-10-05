import { css } from "styled-components"
const mixins = {
  flex: css`
    display: flex;
  `,
  justifyBetween: css`
    justify-content: space-between;
  `,
  itemsCenter: css`
    align-items: center;
  `,
  justifyAround: css`
    justify-content: space-around;
  `,
  justifyCenter: css`
    justify-content: center;
  `,
}

export default mixins
