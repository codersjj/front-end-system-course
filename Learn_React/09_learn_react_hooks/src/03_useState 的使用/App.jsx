import React, { memo } from 'react'
import { useState } from 'react'

/*
  State Hook 的 API 就是 useState
    1. useState 会帮助我们定义一个 state 变量，useState 是一种新方法，它与 class 里面的 this.state 提供的功能完全相同。
      一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。
    2. useState 接受一个参数，在第一次组件被调用时使用，来作为初始化值。（如果没有传递参数，那么初始化值为 undefined）。
    3. useState 的返回值是一个数组，我们可以通过数组的解构，来完成赋值。

  为什么叫 useState 而不叫 createState？
    “create” 可能不是很准确，因为 state 只在组件首次渲染的时候被创建。
    下一次重新渲染时，useState 返回给我们当前的 state。
    如果每次都创建新的变量，它就不是 “state” 了。
    这也是 Hook 的名字总是以 use 开头的一个原因。
*/
const App = memo(() => {
  const [message, setMessage] = useState('Hello World')
  const [count, setCount] = useState(100)
  const [banners, setBanners] = useState([])

  function changeMessage() {
    setMessage('你好，世界！')
  }

  return (
    <div>
      <h2>App message: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App