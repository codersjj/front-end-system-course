import React, { memo, useCallback, useRef, useState } from 'react'

// useCallback 做性能优化的场景：
// 场景一：当需要把一个函数传给子组件时，先用 useCallback 对其进行包裹并指定好相关的依赖，之后给子组件传入 useCallback 返回的函数，让子组件在某些情况下不用重新渲染。

// props 中的属性发生改变时，组件本身就会被重新渲染
const IncrementCpn = memo((props) => {
  console.log('IncrementCpn 被渲染了~ 用大大的组件渲染大大的页面~')
  const { increment } = props

  return (
    <div>
      <button onClick={increment}>increment +1</button>

      {/* 100 个子组件 */}
    </div>
  )
})

const App = memo(function() {
  console.log('App 组件被渲染了~')
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('哈哈哈')

  // 普通的函数
  // 每次组件被渲染时，这个 increment 函数都会被重新创建
  // 当然，组件重新渲染时会创建新的 ReactElement，它会指向新的 increment 函数，旧的 ReactElement 要么被销毁要么被重复利用了，但不管怎样，之前定义的 increment 函数肯定没有引用指向它了，它肯定会被销毁掉。
  // function increment() {
  //   console.log('increment~', count)
  //   setCount(count + 1)
  // }

  // 闭包陷阱
  // const increment = useCallback(function() {
  //   console.log('increment~', count)
  //   setCount(count + 1)
  // }, [])

  // useCallback 第一个参数是一个函数，每次组件重新渲染，它都会被重新创建，useCallback 只是多做了一件事，就是将这个函数的引用赋值给另一个变量（https://stackoverflow.com/a/62304519/22291824）
  // useCallback 第二个参数中的依赖的值没有改变时，返回的是上次渲染缓存的函数（即还是之前那个函数），否则返回第一个参数传入的新的函数
  // const increment = useCallback(function() {
  //   console.log('increment~', count)
  //   setCount(count + 1)
  // }, [count])

  // 进一步优化：当 count 发生改变时，也使用同一个函数（了解）
  // 实现即使 count 变了，子组件也不重新渲染
  // 做法一：第二个参数传入一个空数组，不指定依赖项，缺点：回调陷阱
  // const increment = useCallback(function() {
  //   console.log('increment~', count)
  //   setCount(count + 1)
  // }, [])
  // 做法二：使用 useRef 解决方式一中的回调陷阱
  // useRef 在组件多次渲染时，返回的是同一个值
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(function() {
    console.log('increment~', count)
    setCount(countRef.current + 1)
  }, [])

  // const increment = useCallback(function() {
  //   console.log('increment~', count, message)
  //   setCount(count + 1)
  // }, [count, message])

  return (
    <div>
      <h2>App count: {count}</h2>
      <button onClick={increment}>+1</button>
      {/*
        如果这里传入的 increment 是普通的函数，那么下面修改 message 时，App 组件会重新渲染，increment 函数也会重新创建并被使用到这里，每次都是新的 increment 函数，意味着 IncrementCpn 会被重新渲染；
        但如果使用了 useCallback 同时指定了相应的依赖（这里是 count），那么后续只要 count 没变，increment 函数就还是最近缓存的那个函数，那么 IncrementCpn 的 props 就没有发生改变，意味着 IncrementCpn 不会被重新渲染。
      */}
      <IncrementCpn increment={increment} />

      <p>message: {message}</p>
      <button onClick={e => setMessage(Math.random())}>修改 message</button>
    </div>
  )
})

// function foo(name) {

//   function bar() {
//     console.log(name)
//   }

//   return bar
// }

// const bar1 = foo('jack')
// bar1() // jack
// bar1() // jack

// const bar2 = foo('alan')
// bar2() // alan

// bar1() // jack

export default App