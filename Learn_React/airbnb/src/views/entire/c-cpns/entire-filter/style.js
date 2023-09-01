import styled from "styled-components";

export const FilterWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 81px;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(0,0,0,.08);
  padding: 12px 24px;
  background-color: #fff;

  .filter-items {
    display: flex;
    gap: 15px;

    .item {
      border: 1px solid rgba(0,0,0,.15);
      border-radius: 5px;
      padding: 7px 12px;

      cursor: pointer;

      &.active {
        color: #fff;
        background-color: ${props => props.theme.color.secondaryColor};
      }
    }
  }

`