import React, { memo, useEffect, useLayoutEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  // 会在浏览器重绘屏幕之前触发（所以 count 为 0 时，会被拦截，而不会先被渲染到屏幕上，拦截后设置新的值，会根据新的值再进行渲染）
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
    if (count === 0) {
      setCount(Math.random() + 99)
    }
  })

  // 如果 count 为 0 ，页面会重绘两次（先是显示 0，之后再显示随机数），所以会有闪烁现象
  // useEffect(() => {
  //   console.log('useEffect')
  //   if (count === 0) {
  //     setCount(Math.random() + 99)
  //   }
  // })

  console.log('App render')

  return (
    <div>
      <h2>count: {count}</h2>
      <button onClick={e => setCount(0)}>设置为 0</button>
    </div>
  )
})

export default App