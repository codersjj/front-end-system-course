import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionsWrapper } from './style'
import IconSearch from '@/assets/svg/icon_search'

const SearchSections = memo(({ items = [] }) => {
  return (
    <SectionsWrapper>
      {items.map((item, index) => (
        <div key={index} className='section'>
          <div className="sec-content">
            <span className='label'>{item.label}</span>
            <span className='desc'>{item.desc}</span>
          </div>
          {
            index === items.length - 1
            ? <div className="search-btn">
                <IconSearch width="16" height="16" />
              </div>
            : <div className="divider"></div>
          }
        </div>
      ))}
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  items: PropTypes.array
}

export default SearchSections