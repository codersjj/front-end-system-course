import React from 'react'
import { memo } from 'react'
import { useState } from 'react'

// 普通的函数，里面不能使用 hooks
// function foo() {
// 在自定义的 hook（必须使用 use 开头）中，可以使用 hooks
function useFoo() {
  const [message] = useState('Hello World')
  return message
}

// Hook 就是 JavaScript 函数，这个函数可以帮助你在函数组件中钩入（hook into） React State 以及生命周期等特性
// hooks 只能在 React function component 或者 a custom React Hook function 中使用
  // React 组件名称必须以大写字母开头。
  // React Hook 名称必须以 use 开头。
function CounterHook(props) {
  // useState 来自 react，需要从 react 中导入，它是一个 hook
  // 参数：初始化值，如果不设置，则为u ndefined
  // 返回值：数组，包含两个元素：
    // 元素一：当前状态的值（第一次调用时为初始化值）
    // 元素二：设置状态值的函数
  const [counter, setCounter] = useState(0)

  const [name] = useState('jack')
  console.log(name)

  // 只能在函数最外层（顶层）调用 Hook，不要在循环、条件判断或子函数中调用
  // if (true) {
  //   const [message] = useState('hahaha')
  //   console.log(message)
  // }

  const message = useFoo()
  console.log("🚀 ~ file: CounterHook.jsx:26 ~ CounterHook ~ message:", message)

  return (
    <div>
      <h2>counter: {counter}</h2>
      {/*
        点击按钮后，会完成两件事情：
          1. 调用 setCounter，设置一个新的值
          2. 组件重新渲染，并且根据新的值返回 DOM 结构
      */}
      <button onClick={e => setCounter(counter - 1)}>-1</button>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}

export default memo(CounterHook)