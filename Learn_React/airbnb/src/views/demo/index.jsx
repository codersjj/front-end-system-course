import React, { memo, useState } from 'react'
import Indicators from '@/base-ui/indicators'
import { DemoWrapper } from './style'

const indicators = ['xxx', 'bbb', 'ccc', 'dddd', 'eeeeeeeee', 'f', 'ggggggggggggggg', 'hh']

const Demo = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0)
  console.log("🚀 ~ file: index.jsx:9 ~ Demo ~ currentIndex:", currentIndex)

  const handleControlClick = (isNext) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1
    if (newIndex < 0) newIndex = indicators.length - 1
    if (newIndex > indicators.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className="controls">
        <button onClick={e => handleControlClick()}>上一个</button>
        <button onClick={e => handleControlClick(true)}>下一个</button>
      </div>
      <div className="indicator-list">
        <Indicators selectedIndex={currentIndex}>
          {
            indicators.map(indicator => <button className='indicator' key={indicator}>{indicator}</button>)
          }
        </Indicators>
      </div>
    </DemoWrapper>
  )
})

export default Demo