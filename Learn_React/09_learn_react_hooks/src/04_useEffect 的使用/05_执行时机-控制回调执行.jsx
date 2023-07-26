import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World')

  useEffect(() => {
    console.log('修改 title')
  }, [count])

  useEffect(() => {
    console.log('监听 redux 中的数据变化')
    return () => {}
  }, [])

  useEffect(() => {
    console.log('监听 eventBus 中的事件')
    return () => {}
  }, [])

  useEffect(() => {
    console.log('发送网络请求，从服务器获取数据')

    return () => {
      console.log("会在组件被卸载时，才会执行一次")
    }
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={e => setCount(count + 1)}>count is {count}</button>
      <button onClick={e => setMessage('你好，世界！')}>修改 message（{message}）</button>
    </div>
  )
})

export default App