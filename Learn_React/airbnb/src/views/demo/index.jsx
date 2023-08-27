import React, { memo } from 'react'
import Indicators from '@/base-ui/indicators'
import { DemoWrapper } from './style'

const indicators = ['aaa', 'bbb', 'ccc', 'dddd', 'eeeeeeeee', 'f', 'ggggggggggggggg', 'hh']

const Demo = memo(() => {
  return (
    <DemoWrapper>
      <div className="controls">
        <button>上一个</button>
        <button>下一个</button>
      </div>
      <div className="indicator-list">
        <Indicators>
          {
            indicators.map(indicator => <button className='indicator' key={indicator}>{indicator}</button>)
          }
        </Indicators>
      </div>
    </DemoWrapper>
  )
})

export default Demo