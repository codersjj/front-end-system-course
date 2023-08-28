import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import DetailInfo from './c-cpns/detail-info'

const Detail = memo(() => {
  const detailInfo = useSelector(state => state.detail.detailInfo)

  return (
    <DetailWrapper>
      <DetailPictures data={detailInfo} />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail