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
      z-index: 1;
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
      position: relative;
      max-width: 105vh;
      width: 100%;
      height: 100%;
      overflow: hidden;

      img {
        /* 设置绝对定位，以避免切换图片的动画出现挤压现象 */
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        /* 考虑到图片的尺寸可能不同，这里只设置 max-width，不设置 width，让 width 随高度变化，使图片自适应 */
        max-width: 100%;
        height: 100%;
      }
    }

    .pic-enter {
      transform: translateX(${props => props.isNext ? '100%' : '-100%'});
      opacity: 0;
    }

    .pic-enter-active {
      transform: translateX(0);
      opacity: 1;
      /* transition 加到 *-active 上 https://reactcommunity.org/react-transition-group/css-transition#:~:text=*%2Dactive%20classes%20represent%20which%20styles%20you%20want%20to%20animate%20to%2C%20so%20it%27s%20important%20to%20add%20transition%20declaration%20only%20to%20them%2C%20otherwise%20transitions%20might%20not%20behave%20as%20intended! */
      transition: all 200ms ease;
    }

    .pic-exit {
      opacity: 1;
    }

    .pic-exit-active {
      opacity: 0;
      transition: opacity 200ms ease;
    }
  }

  .preview {
    height: 100px;
    background: orange;
  }
`