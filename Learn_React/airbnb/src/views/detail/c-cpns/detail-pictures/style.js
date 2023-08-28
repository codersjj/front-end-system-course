import styled from "styled-components";

export const PicturesWrapper = styled.div`
  display: flex;
  height: 600px;

  &:hover {
    .cover {
      opacity: 1 !important;
    }

    .item:hover {
      .cover {
        opacity: 0 !important;
      }
    }
  }

  .left,
  .right {
    width: 50%;
    height: 100%;

    .item {
      position: relative;
      box-sizing: border-box;
      border: 1px solid #000;
      height: 100%;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        img {
          transform: scale(1.05);
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform .3s ease;
      }

      .cover {
        position: absolute;
        inset: 0;
        background-color: rgba(0,0,0,.3);
        opacity: 0;
        transition: opacity 300ms ease;
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .pic {
      width: 50%;
      height: 50%;
    }
  }
`