// 具体实现请查看源码：
// https://github.com/reduxjs/redux/blob/master/src/applyMiddleware.ts#L53
// https://github.com/reduxjs/redux/blob/master/src/compose.ts#L46
// https://github.com/reduxjs/redux-thunk/blob/master/src/index.ts#L22

function applyMiddleware(store, ...middlewares) {
  middlewares.forEach(middleware => {
    middleware(store)
  })
}

export default applyMiddleware