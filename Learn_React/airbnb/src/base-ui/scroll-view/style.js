import styled from "styled-components";

export const ViewWrapper = styled.div`
  /* 获取预期的 offsetLeft 的方案一：给相应的祖先元素设置定位（非 none 值） */
  position: relative;
  width: 100%;
  overflow: hidden;

  .scroll-content {
    display: flex;

    /* 获取预期的 offsetLeft 的方案二：给相应的祖先元素设置 transform（非 none 值） */
    /* 设置 transform 可以生成一个新的 containing block，取代原先的 containing block
    https://developer.mozilla.org/en-US/docs/Web/CSS/position#:~:text=unless%20any%20ancestor%20has%20transform%2C%20perspective%2C%20or%20filter%20property%20set%20to%20something%20other%20than%20none%20(see%20CSS%20Transforms%20Spec)%2C%20which%20then%20causes%20that%20ancestor%20to%20take%20the%20place%20of%20the%20elements%20containing%20block. */
    /* transform: translate(0); */

    transition: transform 250ms ease;
  }
`