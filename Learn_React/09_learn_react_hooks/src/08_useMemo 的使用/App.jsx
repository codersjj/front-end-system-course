import React, { memo, useMemo, useState } from 'react'

const HelloWorld = memo(function(props) {
  console.log('子组件 HelloWorld 被渲染了')

  const { name, age } = props.info

  return <h2>HelloWorld name: {name}, age: {age}</h2>
})

function calcNumSum(num) {
  console.log('开始大大的计算程序~')
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

const App = memo(() => {
  console.log('父组件 App 被渲染了~')
  const [count, setCount] = useState(0)

  /* 案例一：进行大量的计算操作，是否有必须要每次渲染时都重新计算 */
  // const result = calcNumSum(50)

  // React Hook useMemo does nothing when called with only one argument.
  // const result = useMemo(() => {
  //   console.log('useMemo calculateValueFn is invoked')
  //   return calcNumSum(50)
  // })

  // 1. 使用 useMemo，不依赖任何的值（即第二个参数传入空数组），进行计算，那么传入的函数只会在第一次被执行，后续不会被重新调用，useMemo 的返回值就不会改变，始终是传入的函数第一次执行后的返回值
  const result = useMemo(() => {
    console.log('useMemo calculateValueFn is invoked')
    return calcNumSum(50)
  }, [])

  // 2. 依赖 count
  // const result = useMemo(() => {
  //   console.log('useMemo calculateValueFn is invoked')
  //   return calcNumSum(count * 2)
  // }, [count])

  // 3. useMemo 和 useCallback 的对比
  // function fn() {}
  // useCallback(fn, deps)
  // 等价于
  // useMemo(() => fn, deps)

  /* 案例二：对子组件传递相同内容的对象（不是对象的值则用不用 useMemo 都一样）时，使用 useMemo 进行性能优化（取消不必要的子组件渲染） */
  // 当前组件每次被渲染时，info 对象都会被重新创建为新的对象，每次都是新的对象传入子组件，意味着子组件也会重新渲染
  // const info = { name: 'jack', age: 20 }
  const cachedInfo = useMemo(() => ({ name: 'jack', age: 20 }), [])
  // const cachedInfo = useMemo(() => info, [])

  return (
    <div>
      <h2>计算结果：{result}</h2>
      <h2>计数器：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>

      {/* <HelloWorld result={result} info={info} /> */}
      <HelloWorld result={result} info={cachedInfo} />
    </div>
  )
})

export default App