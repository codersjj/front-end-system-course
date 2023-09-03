import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { fetchEntireListAction } from '@/store/modules/entire/actionCreators'

const Entire = memo(() => {

  // https://react-redux.js.org/api/hooks#usedispatch
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
    dispatch(fetchEntireListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire