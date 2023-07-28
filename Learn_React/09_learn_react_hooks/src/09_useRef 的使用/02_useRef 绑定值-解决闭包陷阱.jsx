import React, { memo, useCallback, useRef, useState } from 'react'

let obj = null

const App = memo(() => {
  console.log('组件开始渲染')
  const [count, setCount] = useState(0)

  // 在整个生命周期中，useRef 返回的始终是同一个对象
  const nameRef = useRef()
  console.log(obj === nameRef)
  obj = nameRef

  const countRef = useRef()
  // console.log('countRef.current:', countRef.current)
  countRef.current = count
  // 使用 useRef 解决闭包陷阱
  const increment = useCallback(() => {
    // setCount(count + 1)
    setCount(countRef.current + 1)
  }, [])

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexWrap: 'wrap', placeContent: 'center' }}>
      {/* <button onClick={e => setCount(count + 1)}>count is {count}</button> */}
      <button style={{ fontSize: '30px' }} onClick={increment}>count is {count}</button>
    </div>
  )
})

export default App