import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  /* overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  } */

  .item {
    flex-shrink: 0;
    flex-basis: 120px;

    margin-right: 16px;
    box-sizing: border-box;
    border: .5px solid #d8d8d8;
    border-radius: 3px;
    padding: 14px 16px;

    font-size: 17px;
    text-align: center;

    white-space: nowrap;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadowTransition}

    &:last-child {
      margin-right: 0;
    }

    /* &:hover, */
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`