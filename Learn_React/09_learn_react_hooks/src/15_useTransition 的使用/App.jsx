import React, { memo, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  const [pending, startTransition] = useTransition()

  function handleInput(e) {
    // 告诉 react 对于某部分任务的更新优先级较低，可以稍后进行更新
    startTransition(() => {
      const { value: keyword } = e.target
      // 注意：这里需要从完整的数组即 namesArray 中进行过滤
      const filteredShowNames = namesArray.filter(name => name.includes(keyword))
      setShowNames(filteredShowNames)
    })
  }

  return (
    <div>
      {/*
        这里文本框中输入（或删除）之后文本的渲染和下面列表内容的渲染是在同一次更新中进行的。
        但是要渲染的列表内容很多时，浏览器可能会出现卡顿，直观的效果就是输入（或删除）之后文本的渲染结果和下面列表内容的渲染结果会等待一定时间后再同时呈现。
        为了更明显地看到卡顿效果，我们可以模拟电脑硬件较差时浏览器的渲染效果：F12 -> Performance -> 右上角图标（Capture settings -> CPU 选择 4x slowdown）
      */}
      <input type="text" onInput={handleInput} />
      <h2>用户名列表：{pending && <span>loading...</span>}</h2>
      <ul>
        {
          showNames.map((name, index) => {
            return <li key={name}>{name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default App