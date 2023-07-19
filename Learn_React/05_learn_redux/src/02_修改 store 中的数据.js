const store = require('./store')

console.log(store.getState())

// 修改 store 中的数据（state）：必须通过派发（dispatch） action 实现
// 修改 name
const nameAction = { type: 'change_name', name: 'alan' }
store.dispatch(nameAction)

console.log(store.getState())

const nameAction2 = { type: 'change_name', name: 'lele' }
store.dispatch(nameAction2)

console.log(store.getState())

// 修改 counter
const counterAction = { type: 'add_number', num: 10 }
store.dispatch(counterAction)

console.log(store.getState())