import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

function CounterHook(props) {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h2>counter: {counter}</h2>
      <button onClick={e => setCounter(counter - 1)}>-1</button>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

export default memo(CounterHook)