import styled from 'styled-components'

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB ;

  .wrapper {
    box-sizing: border-box;
    margin: 0 auto;
    width: 1032px;
    padding: 48px 0;

    .list {
      display: flex;

      .group {
        flex: 1;
        padding: 0 8px;

        .term {
          margin-bottom: 16px;
          font-size: 14px;
          font-weight: 700;
          color: ${props => props.theme.text.primaryColor};
        }

        .item {
          margin-bottom: 4px;
          font-size: 12px;
          color: #767676;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .copyright {
      margin-top: 16px;
      border-top: 1px solid #EBEBEB;
      padding-top: 16px;
      text-align: center;
      color: #767676;
    }
  }
`