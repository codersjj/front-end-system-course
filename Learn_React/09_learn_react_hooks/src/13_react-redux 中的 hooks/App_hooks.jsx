import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const App = memo(() => {
  // 1. 使用 useSelector 将 redux 中 store 中的数据映射到组件内
  const count = useSelector((state) => state.counter.count)

  // 2. 使用 dispatch 直接派发 action
  const dispatch = useDispatch()
  function addNumberHandler(num) {
    dispatch(addNumberAction(num))
  }
  function subNumberHandler(num) {
    dispatch(subNumberAction(num))
  }

  return (
    <div>
      <h2>App</h2>
      <h3>count: {count}</h3>
      <button onClick={e => addNumberHandler(1)}>+1</button>
      <button onClick={e => subNumberHandler(1)}>-1</button>
    </div>
  )
})

export default App