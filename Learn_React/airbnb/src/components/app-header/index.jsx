import React, { memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useScrollPosition } from '@/hooks'

const AppHeader = memo(() => {
  /* 定义组件内部的状态 */
  const [isSearch, setIsSearch] = useState(true)

  /* 从 redux 中获取数据 */
  const headerConfig = useSelector(state => state.main.headerConfig)

  const { isFixed } = headerConfig
  console.log('app header', isFixed)

  /* 监听滚动 */
  const { scrollY } = useScrollPosition()
  // 记录上一次滚动的位置，与界面刷新无关，没有必要使用 useState，可以直接使用 useRef
  const prevScrollY = useRef(0)
  const distance = Math.abs(scrollY - prevScrollY.current)
  // 搜索框没有弹出来时，不断记录滚动的位置
  if (!isSearch) prevScrollY.current = scrollY
  // 在搜索框弹出的情况下，不记录滚动的位置，直接比较当前滚动的位置与之前记录的位置之间的距离是否大于 30
  if (isSearch && distance > 30) setIsSearch(false)

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