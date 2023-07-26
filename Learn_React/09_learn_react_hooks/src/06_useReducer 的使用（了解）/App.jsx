import React, { memo, useReducer, useState } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'add_number':
      return { ...state, counter: state.counter + action.num }
    case 'sub_number':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}

const App = memo(() => {
  // const [count, setCount] = useState(0)

  // 很多人看到 useReducer 的第一反应应该是 redux 的某个替代品，其实并不是。
  // useReducer 仅仅是 useState 的一种替代方案：
    // 在某些场景下，如果 state 的处理逻辑比较复杂，我们可以通过 useReducer 来对其进行拆分
    // 或者这次修改的 state 需要依赖之前的 state 时，也可以使用
  const [state, dispatch] = useReducer(reducer, { counter: 100, friends: [], user: {} })

  // const [counter, setCounter] = useState()
  // const [friends, setFriends] = useState()
  // const [user, setUser] = useState()

  return (
    <div>
      {/* <h2>count: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
      <button onClick={e => setCount(count + 5)}>+5</button>
      <button onClick={e => setCount(count - 5)}>-5</button> */}

      <h2>App counter: {state.counter}</h2>
      <button onClick={e => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={e => dispatch({ type: 'add_number', num: 5 })}>+5</button>
      <button onClick={e => dispatch({ type: 'sub_number', num: 5 })}>-5</button>
    </div>
  )
})

export default App