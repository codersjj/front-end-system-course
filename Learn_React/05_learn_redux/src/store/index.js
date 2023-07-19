const { createStore } = require('redux')
const { CHANGE_NAME, ADD_NUMBER } = require('./constants')

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
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}

// 创建的 store
const store = createStore(reducer)

module.exports = store