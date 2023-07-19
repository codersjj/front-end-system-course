const { createStore } = require('redux')

// 初始化的数据
const initialState = {
  name: 'jack',
  counter: 100
}

// 定义 reducer 函数（要求是纯函数）
function reducer() {
  return initialState
}

// 创建的 store
const store = createStore(reducer)

module.exports = store