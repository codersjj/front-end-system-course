import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
  color: #222;

  /* 方案二：找到相应的 class，自己重新写样式覆盖原来的样式 */
  .MuiPaginationItem-previousNext,
  .MuiPaginationItem-page {
    border-radius: 50%;
    min-width: 36px;
    height: 36px;
  }

  .MuiPaginationItem-previousNext {
    .MuiPaginationItem-icon {
      font-size: 1.5rem;
    }
  }

  .MuiPaginationItem-page {
    margin: 0 9px;

    &:hover {
      text-decoration: underline;
    }

    &.Mui-selected {
      color: #fff;
      background-color: #222;
    }
  }
`