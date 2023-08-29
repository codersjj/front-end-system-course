import styled from "styled-components";

export const ViewerWrapper = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85));
  background-color: #fff;

  .top {
    position: relative;
    height: 86px;

    .close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 16px 28px;
      cursor: pointer;
    }
  }

  .content {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .controls {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: space-between;

      .left,
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        width: 100px;
        color: #fff;
        background-color: transparent;
        cursor: pointer;
      }
    }

    .picture {
      max-width: 105vh;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .preview {
    height: 100px;
    background: orange;
  }
`