import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useSelector } from 'react-redux'

const AppHeader = memo(() => {
  /* 从 redux 中获取数据 */
  const headerConfig = useSelector(state => state.main.headerConfig)

  const { isFixed } = headerConfig
  console.log('app header', isFixed)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter />
          <HeaderRight />
        </div>
        <div className="search-area">
          
        </div>
      </div>
      <div className="cover"></div>
    </HeaderWrapper>
  )
})

export default AppHeader