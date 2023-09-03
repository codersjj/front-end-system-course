import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 9;
    border-bottom: 1px solid ${props => props.theme.isAlpha ? 'rgba(0,0,0,.08)' : '#eee'};
    background-color: ${props => props.theme.isAlpha ? 'transparent' : '#fff'};
    /* transition: background-color 250ms; */

    .top {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 24px;
      height: 80px;
    }
  }

  .cover {
    position: fixed;
    z-index: 1;
    inset: 0;
    background-color: rgba(0,0,0,.3);
  }
`

export const SearchAreaWrapper = styled.div`
  height: ${props => props.isSearch ? '80px' : '0'};
  transition: height 250ms;
`