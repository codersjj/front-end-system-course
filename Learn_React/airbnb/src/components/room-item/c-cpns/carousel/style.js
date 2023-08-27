import styled from "styled-components";

export const CarouselWrapper = styled.div`
  position: relative;

  .controls {
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  .controls {
    z-index: 9;
    display: flex;
    justify-content: space-between;
    color: #fff;
    opacity: 0;

    .prev,
    .next {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .prev {
      background-image: linear-gradient(90deg, rgba(0,0,0,.1), rgba(0,0,0,.01));
    }

    .next {
      background-image: linear-gradient(-90deg, rgba(0,0,0,.1), rgba(0,0,0,.01));
    }
  }

  .indicators {
    position: absolute;
    z-index: 11;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30%;
  }

  &:hover {
    .controls {
      opacity: 1;
    }
  }

  /* 父组件中已设置该样式 */
  /* .cover {
    position: relative;
    border-radius: 3px;
    padding-top: 66.66%;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  } */
`