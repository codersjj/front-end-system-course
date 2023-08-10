import { styled } from "styled-components";

export const CenterWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 24px;
  min-width: 348px;

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #DDD;
    border-radius: 24px;
    padding: 0 10px 0 24px;
    height: 48px;
    box-shadow: 0 1px 2px rgba(0,0,0,.08);
    cursor: pointer;

    ${props => props.theme.mixin.boxShadowTransition}

    .label {
      font-weight: 700;
      color: #222;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }
`