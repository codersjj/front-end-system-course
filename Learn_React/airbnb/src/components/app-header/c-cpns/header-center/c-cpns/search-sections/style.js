import styled from "styled-components";

export const SectionsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 32px;
  max-width: 850px;
  width: 100%;

  .section {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: space-between;
    border-radius: 32px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      border-radius: 32px;
      background-color: #ebebeb;
    }

    &:hover:has(.search-btn:hover) {
      background-color: transparent;
    }

    &:first-child,
    &:last-child {
      .sec-content {
        padding: 14px 32px;
      }
    }

    .sec-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
      padding: 14px 24px;

      .label {
        line-height: 16px;
        font-size: 12px;
        font-weight: 800;
      }

      .desc {
        line-height: 18px;
        font-size: 14px;
        cursor: auto;
      }
    }

    .search-btn {
      position: absolute;
      right: 9px;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};

      &:hover {
        background-image: linear-gradient(rgb(224 63 92), rgb(224 63 92));
      }
    }

    .divider {
      margin: 14px 0;
      width: 1px;
      background-color: #ddd;
    }
  }
`