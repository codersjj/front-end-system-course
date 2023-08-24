import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo(({ data }) => {
  const { title, subtitle, list } = data

  return (
    <SectionV3Wrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="room-list">
        <ScrollView>
          {
            list.map(item => {
              return <RoomItem key={item.id} itemData={item} itemWidth="20%" />
            })
          }
        </ScrollView>
      </div>
      <SectionFooter text="plus" />
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  data: PropTypes.object
}

export default HomeSectionV3