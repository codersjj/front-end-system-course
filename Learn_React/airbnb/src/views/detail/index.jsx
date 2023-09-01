import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <DetailPictures data={detailInfo} />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail