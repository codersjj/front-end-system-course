import styled from "styled-components";

export const FilterWrapper = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.08);
  padding: 12px 24px;

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