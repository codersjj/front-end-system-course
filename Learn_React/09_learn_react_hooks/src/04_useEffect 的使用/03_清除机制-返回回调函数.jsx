import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 负责告知 React，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    // 1. 监听事件
    // const unsubscribe = store.subscribe(() => {
    // })

    // function bar() {
    // }
    // eventBus.on('foo', bar)

    console.log('监听 redux 中的数据变化，监听 eventBus 中的 foo 事件')

    return () => {
      console.log('取消监听 redux 中的数据变化，取消监听 eventBus 中的 foo 事件')
    }
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', placeContent: 'center' }}>
      <button onClick={e => setCount(count + 1)}>count is {count}</button>
    </div>
  )
})

export default App