import styled from "styled-components";

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 24px;
  min-width: 348px;
  height: 48px;

  .search-bar {
    /* 设置绝对定位，解决动画过程中出现的挤压现象 */
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #DDD;
    border-radius: 24px;
    padding: 0 10px 0 24px;
    width: 300px;
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

  .search-detail {
    position: relative;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      width: 850px;
    }
  }

  .bar-enter {
    transform: scale(2.857, 1.375) translateY(58px);
    opacity: 0;
  }

  .bar-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
    opacity: 0;
  }

  .detail-enter {
    opacity: 0;
    transform: scale(0.35, 0.727) translateY(-58px);
  }

  .detail-enter-active {
    opacity: 1;
    transform: scale(1) translateY(0);
    transition: all 250ms ease;
  }

  .detail-exit {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .detail-exit-active {
    opacity: 0;
    transform: scale(0.35, 0.727) translateY(-58px);
    transition: all 250ms ease;
  }

`