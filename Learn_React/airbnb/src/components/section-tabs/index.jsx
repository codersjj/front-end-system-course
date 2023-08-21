import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const { tabNames = [] } = props

  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  // function classNames(...args) {
  //   let classStr = ''

  //   args.forEach(item => {
  //     if (typeof item === 'string') {
  //       classStr += `${item} `
  //     }
  //     else {
  //       for (const [className, value] of Object.entries(item)) {
  //         if (value) classStr += `${className} `
  //       }
  //     }
  //   })

  //   return classStr
  // }

  function handleTabClick(index) {
    setCurrentTabIndex(index)
  }

  return (
    <TabsWrapper>
      {
        tabNames.map((tabName, index) => {
          return (
            <div
              key={index}
              className={classNames('item', { active: index === currentTabIndex })}
              onClick={e => handleTabClick(index)}
            >
              {tabName}
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs