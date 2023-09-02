import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'

const AppHeader = memo(() => {
  /* 定义组件内部的状态 */
  const [isSearch, setIsSearch] = useState(true)

  /* 从 redux 中获取数据 */
  const headerConfig = useSelector(state => state.main.headerConfig)

  const { isFixed } = headerConfig
  console.log('app header', isFixed)

  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter isSearch={isSearch} onSearchClick={e => setIsSearch(true)} />
          <HeaderRight />
        </div>
        <SearchAreaWrapper isSearch={isSearch} />
      </div>
      {isSearch && <div className="cover" onClick={() => setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader