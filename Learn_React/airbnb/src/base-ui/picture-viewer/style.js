import styled from "styled-components";

export const ViewerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  background-image: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85));
  background-color: #fff;

  .top {
    position: relative;
    height: 86px;
    background: rebeccapurple;

    .close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 16px 28px;
      cursor: pointer;
    }
  }
`