const { createStore } = require('redux')

// 初始化的数据
const initialState = {
  name: 'jack',
  counter: 100
}

// 定义 reducer 函数（要求是纯函数）
// 两个参数：
// 参数一：store 中当前保存的 state，这里我们给它一个初始值，否则第一次拿到的是 undefined
// 参数二：本次需要更新的 action（dispatch 传入的 action）
// 返回值：会作为 store 之后要存储的 state
function reducer(state = initialState, action) {
  // console.log("🚀 ~ file: index.js:14 ~ reducer ~ state, action:", state, action)

  // 有数据要更新的时候，返回一个新的 state
  if (action.type === 'change_name') {
    // 错误写法（修改传入的参数对象，意味着 reducer 不再是纯函数了）：
    // state.name = 'xxx'

    // 正确写法（返回一个新对象，一个新的 state 对象）：
    // 原理类似于我们之前讲过的 react 源码中 checkShouldComponentUpdate() 函数中根据 shallowEqual() 的结果判断是否进行状态更新
    return { ...state, name: action.name }
  } else if (action.type === 'add_number') {
    return { ...state, counter: state.counter + action.num }
  }

  // 没有数据要更新，返回之前的 state
  return state
}

// 创建的 store
const store = createStore(reducer)

module.exports = store