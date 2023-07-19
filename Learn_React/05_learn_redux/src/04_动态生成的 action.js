const store = require('./store')

// 订阅（在 react 中通常在组件的 componentDidMount 生命周期函数中做订阅操作）
const unsubscribe = store.subscribe(() => {
  console.log('订阅数据的变化：', store.getState())
})

// actionCreators：帮助我们创建 action
const changeNameAction = name => ({ type: 'change_name', name })

// 修改 store 中的数据（state）：必须通过派发（dispatch） action 实现
// 修改 name
store.dispatch(changeNameAction('alan'))

store.dispatch(changeNameAction('lele'))

// 取消订阅（在 react 中通常在组件的 componentWillUnmount 生命周期函数中做取消订阅操作），后续的状态更新将不再被监听到
// unsubscribe()

const addNumberAction = num => ({ type: 'add_number', num })

// 修改 counter
store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(20))
store.dispatch(addNumberAction(30))
store.dispatch(addNumberAction(100))