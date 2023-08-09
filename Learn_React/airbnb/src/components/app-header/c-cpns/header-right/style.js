import { styled } from "styled-components";

const boxShadowTransition = `
  transition: box-shadow 200ms ease;
  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,.18);
  }
`

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
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
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #DDD;
    border-radius: 21px;
    padding: 5px 5px 5px 12px;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    /* ${boxShadowTransition} */
    ${props => props.theme.mixin.boxShadowTransition}

    .avatar {
      margin-left: 12px;
      width: 30px;
      height: 30px;
    }
  }
`