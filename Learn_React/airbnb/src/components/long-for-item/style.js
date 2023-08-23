import styled from "styled-components";

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  width: ${props => props.width};

  .inner {
    position: relative;
    border-radius: 3px;
    cursor: pointer;
    overflow: hidden;

    .cover {
      width: 100%;
    }

    .mask, .info {
      position: absolute;
      left: 0;
      right: 0;
    }

    .mask {
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(180deg, rgba(0,0,0,0) 3%, rgba(0,0,0,.8));
    }

    .info {
      bottom: 30px;
      color: #fff;
      text-align: center;

      .city {
        margin-bottom: 6px;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`