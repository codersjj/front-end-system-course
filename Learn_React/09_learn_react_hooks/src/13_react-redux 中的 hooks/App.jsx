import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNumberAction, subNumberAction, changeMessageAction } from './store/modules/counter'

// memo 高阶组件包裹起来的组件有对应的特点：只有 props 发生改变时，才会重新渲染
const Home = memo((props) => {
  // const message = useSelector(state => state.counter.message)
  // With useSelector(), returning a new object every time will always force a re-render by default. https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
  // const { message } = useSelector(state => ({ message: state.counter.message }))
  // If you want to retrieve multiple values from the store, you can:
  const { message } = useSelector(state => ({ message: state.counter.message }), shallowEqual)

  const dispatch = useDispatch()
  function changeMessageHandler() {
    dispatch(changeMessageAction('哈哈哈'))
  }

  console.log('Home render')

  return (
    <div>
      <h3>Home message: {message}</h3>
      <button onClick={e => changeMessageHandler()}>修改 message</button>
    </div>
  )
})

const App = memo(() => {
  // 1. 使用 useSelector 将 redux 中 store 中的数据映射到组件内
  // const count = useSelector((state) => state.counter.count)
  // 下面这种写法意味着选择器每次被调用时都会返回一个新的对象引用，这会导致组件在每次 action 被 dispatch 后重新渲染
  // const { count } = useSelector((state) => ({ count: state.counter.count }))
  // 使用这种写法时，可以将 shallowEqual 函数传给第二个参数
  const { count } = useSelector((state) => ({ count: state.counter.count }), shallowEqual)

  // 2. 使用 dispatch 直接派发 action
  const dispatch = useDispatch()
  function addNumberHandler(num) {
    dispatch(addNumberAction(num))
  }
  function subNumberHandler(num) {
    dispatch(subNumberAction(num))
  }

  console.log('App render')

  return (
    <div>
      <h2>App</h2>
      <h3>count: {count}</h3>
      <button onClick={e => addNumberHandler(1)}>+1</button>
      <button onClick={e => subNumberHandler(1)}>-1</button>
      <Home />
    </div>
  )
})

export default App