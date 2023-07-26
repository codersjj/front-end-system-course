import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 告知 react，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    // 1. 修改 document 的 title（1 行）
    console.log('修改 title')
  })

  // 一个函数式组件中可以存在多个 useEffect，多个 useEffect 按定义的顺序依次执行
  useEffect(() => {
    // 2. 对 redux 中数据变化进行监听（10 行）
    console.log('监听 redux 中的数据')
    return () => {
      // 取消对 redux 中数据的监听
    }
  })

  useEffect(() => {
    // 3. 监听 eventBus 中的 foo 事件（20 行）
    console.log('监听 eventBus 中的 foo 事件')
    return () => {
      // 取消 eventBus 中的 foo 事件监听
    }
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={e => setCount(count + 1)}>count is {count}</button>
    </div>
  )
})

export default App