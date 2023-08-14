import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const HomeSectionV1 = memo((props) => {
  const { data } = props

  return (
    <SectionV1Wrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionRooms roomList={data.list} />
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  data: PropTypes.object
}

export default HomeSectionV1