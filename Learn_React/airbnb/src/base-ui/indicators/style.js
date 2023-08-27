import styled from "styled-components";

export const IndicatorsWrapper = styled.div`
  overflow: hidden;

  .indicators {
    /* 用于子元素获取正确的 offsetLeft */
    position: relative;
    display: flex;

    transition: transform 300ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`