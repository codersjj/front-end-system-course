import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import filterItems from '@/assets/data/filter_data'

const EntireFilter = memo(() => {
  const [selectedItems, setSelectedItems] = useState([])

  function handleItemClick(item) {
    const newSelectedItems = [...selectedItems]
    if (selectedItems.includes(item)) { // 移除
      const index = selectedItems.findIndex(sItem => sItem === item)
      newSelectedItems.splice(index, 1)
    } else { // 添加
      newSelectedItems.push(item)
    }
    setSelectedItems(newSelectedItems)
  }

  return (
    <FilterWrapper>
      <ul className="filter-items">
        {
          filterItems.map(item => {
            return (
              <li
                key={item}
                className={classNames('item', { active: selectedItems.includes(item) })}
                onClick={e => handleItemClick(item)}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
    </FilterWrapper>
  )
})

export default EntireFilter