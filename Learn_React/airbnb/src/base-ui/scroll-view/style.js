import styled from "styled-components";

export const ViewWrapper = styled.div`
  /* 获取预期的 offsetLeft 的方案一：给相应的祖先元素设置定位（非 none 值） */
  position: relative;
  width: 100%;

  .control {
    position: absolute;
    top: 50%;
    /* 由于在后面的 scroll-content 上设置了 transform，transform （非 none）会形成一个新的层叠上下文，导致 scroll-content 会盖在两个按钮上，所以这里需要设置 z-index https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context */
    z-index: 9;

    border-radius: 50%;
    padding: 8px;
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  .content {
    overflow: hidden;

    .scroll-content {
      display: flex;

      /* 获取预期的 offsetLeft 的方案二：给相应的祖先元素设置 transform（非 none 值） */
      /* 设置 transform 可以生成一个新的 containing block，取代原先的 containing block
      https://developer.mozilla.org/en-US/docs/Web/CSS/position#:~:text=unless%20any%20ancestor%20has%20transform%2C%20perspective%2C%20or%20filter%20property%20set%20to%20something%20other%20than%20none%20(see%20CSS%20Transforms%20Spec)%2C%20which%20then%20causes%20that%20ancestor%20to%20take%20the%20place%20of%20the%20elements%20containing%20block. */
      /* transform: translate(0); */

      transition: transform 250ms ease;
    }
  }

`