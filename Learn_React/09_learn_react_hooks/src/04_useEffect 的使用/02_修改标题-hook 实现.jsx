import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  useEffect(() => {
    // 传入的回调函数会在函数组件每次被渲染完成后，自动执行
    // 网络请求、DOM 操作（如下面的修改标题）、事件监听
    document.title = count
  })

  // 修改标题（在这里是组件渲染逻辑之外的东西，属于副作用（side effect），更合理的做法是放到 useEffect 中去）
  // document.title = count

  return (
    <div>
      <h2>计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App