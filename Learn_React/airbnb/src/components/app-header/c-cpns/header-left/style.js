import { styled } from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  /* 方式一：使用 CSS 变量 */
  /* color: var(--primary-color); */
  /* 方式二：使用 styled-components 提供的 Theming 功能 https://styled-components.com/docs/advanced#theming */
  color: ${props => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
  }
`