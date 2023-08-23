import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/long-for-item'

const HomeLongFor = memo((props) => {
  const { title, subtitle, list } = props.data

  return (
    <LongForWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <div className="long-for-list">
        <ScrollView>
          {
            list.map((item) => <LongForItem key={item.city} itemData={item} itemWidth='20%' />)
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  data: PropTypes.object
}

export default HomeLongFor