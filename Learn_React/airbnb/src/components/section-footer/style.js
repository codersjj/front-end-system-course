import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;

  .left {
    display: flex;
    align-items: center;

    color: ${props => {
      return props.isThemeColor ? props.theme.color.secondaryColor : '#000'
    }};
    font-size: 17px;
    font-weight: bold;

    cursor: pointer;

    &:hover {
      text-decoration: underline  ;
    }

    .text {
      margin-right: 6px;
    }
  }
`