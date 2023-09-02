import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { items = [], activeKey, onTabClick } = props

  const [currActiveKey, setCurrActiveKey] = useState(activeKey ?? items[0]?.key ?? '')

  const handleTabClick = (key) => {
    setCurrActiveKey(key)
    if (onTabClick) onTabClick(key)
  }

  return (
    <TabsWrapper>
      {
        items.map(({ key, label }) => (
          <li
            key={key}
            className={classNames({ active: key === currActiveKey })}
            onClick={e => handleTabClick(key)}
          >
            <div className="label">{label}</div>
          </li>
        ))
      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  items: PropTypes.array,
  activeKey: PropTypes.string,
  onTabClick: PropTypes.func
}

export default SearchTabs