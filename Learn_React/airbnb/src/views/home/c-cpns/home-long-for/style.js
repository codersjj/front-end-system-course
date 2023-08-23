import styled from "styled-components";

export const LongForWrapper = styled.div`
  margin-top: 30px;

  .long-for-list {
    display: flex;
    margin: 0 -8px;

    /* 调整 ScrollView 中的按钮位置 */
    .control.left {
      transform: translate(calc(-50% + 8px), -50%);
    }

    .control.right {
      transform: translate(calc(50% - 8px), -50%);
    }
  }
`