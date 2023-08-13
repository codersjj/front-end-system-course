import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  color: ${props => props.theme.text.primaryColor};

  .btns {
    display: flex;
    cursor: pointer;

    .btn {
      border-radius: 22px;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #DDD;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    ${props => props.theme.mixin.boxShadowTransition}

    .avatar {
      margin-left: 12px;
      width: 30px;
      height: 30px;
    }

    .panel {
      position: absolute;
      top: 53px;
      right: 0;
      box-sizing: border-box;
      /* border: 1px solid #DDD; */
      border-radius: 12px;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 1px 15px 5px rgba(0,0,0,.08);
      overflow: hidden;
      cursor: auto;

      .top, .bottom {
        padding: 5px 0;

        .item {
          padding: 0 15px;
          height: 45px;
          line-height: 45px;
          font-weight: normal;
          cursor: pointer;

          &.register {
            font-weight: bold;
          }

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .divider {
        height: 1px;
        background-color: #DDD;
      }
    }
  }
`