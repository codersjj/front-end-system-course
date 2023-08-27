import styled from "styled-components";

export const DemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .indicator-list {
    border: 1px solid #f00;
    padding: 10px;
    width: 200px;

    button {
      margin: 12px;
      border: 10px solid #000;
    }
  }
`