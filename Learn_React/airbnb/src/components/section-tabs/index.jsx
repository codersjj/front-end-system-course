import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { TabsWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { tabNames = [], onTabClick } = props

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

  function handleTabClick(tabName, index) {
    setCurrentTabIndex(index)
    onTabClick(tabName, index)
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((tabName, index) => {
            return (
              <div
                key={index}
                className={classNames('item', { active: index === currentTabIndex })}
                onClick={e => handleTabClick(tabName, index)}
              >
                {tabName}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array,
  onTabClick: PropTypes.func
}

export default SectionTabs