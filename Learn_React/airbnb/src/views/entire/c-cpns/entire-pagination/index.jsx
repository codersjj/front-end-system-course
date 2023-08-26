import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from '@mui/material'

import { PaginationWrapper } from './style'
import { changeCurrentPageAction, fetchEntireListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
  // https://react-redux.js.org/api/hooks#useselector
  const currentPage = useSelector(state => state.entire.currentPage)
  const totalCount = useSelector(state => state.entire.totalCount)
  const roomList = useSelector(state => state.entire.roomList)

  // 这里不需要定义成 state，因为这些值（totalCount、currentPage）是从 Redux 的 useSelector 函数中获取的，它们会自动随着 Redux 状态的变化而更新。useSelector 会将 Redux 状态的变化反映在组件中，并触发重新渲染。
  const pageCount = Math.ceil(totalCount / 20)
  // currentPage: 0 -> 1 ~ 20
  // currentPage: 1 -> 21 ~ 40
  // currentPage: 2 -> 41 ~ 60
  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  const dispatch = useDispatch()
  const handleChange = (event, value) => {
    // 更新最新的页码（redux store 中的 currentPage）
    dispatch(changeCurrentPageAction(value - 1))
    dispatch(fetchEntireListAction())
  }

  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <>
            <Pagination
              count={pageCount}
              color="primary"
              onChange={handleChange}
            />
            <p className="desc">第 {start} - {end} 个房源, 共超过 {totalCount} 个</p>
          </>
        )
      }
    </PaginationWrapper>
  )
})

export default EntirePagination