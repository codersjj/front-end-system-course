import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  .scroll-content {
    display: flex;

    transition: transform 250ms ease;
  }
`