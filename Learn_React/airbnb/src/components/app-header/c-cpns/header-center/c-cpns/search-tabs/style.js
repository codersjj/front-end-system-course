import styled from "styled-components";

export const TabsWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  color: ${props => props.theme.isAlpha ? '#fff' : '#222'};

  li {
    line-height: 20px;
    cursor: pointer;

    &.active {
      .label::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    &:not(.active) {
      .label:hover {
        opacity: 0.65;
        &::after {
          opacity: 0.65;
          transform: scaleX(1);
        }
      }
    }

    .label {
      position: relative;
      margin: 10px 16px;

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: currentColor;
        transform: scaleX(0);

        transition: transform 200ms cubic-bezier(0.2,0,0,1);
      }

    }

  }
`