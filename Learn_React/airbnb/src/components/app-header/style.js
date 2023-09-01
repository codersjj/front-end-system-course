import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.08);
  padding: 0 24px;
  height: 80px;
  background-color: #fff;

  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }
`