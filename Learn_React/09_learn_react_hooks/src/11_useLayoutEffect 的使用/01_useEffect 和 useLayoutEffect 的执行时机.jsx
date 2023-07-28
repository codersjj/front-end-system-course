import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(0)

  // useLayoutEffect 是 useEffect 的一个变种，它会在浏览器重绘前执行。
  // useLayoutEffect 会在渲染的内容更新到 DOM 上之前执行，会阻塞 DOM 的更新
  // 如果我们希望在某些操作发生之后再更新 DOM，那么应该将这个操作放到 useLayoutEffect。
  // useLayoutEffect 可能会损害性能。如果可以的话，优先使用 useEffect。
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })

  // useEffect 的回调会在组件加入到 DOM 中之后执行
  // useEffect 会在渲染的内容更新到 DOM 上后执行，不会阻塞 DOM 的更新
  useEffect(() => {
    console.log('useEffect')
  })

  console.log('App rendered')

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App