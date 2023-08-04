import React from 'react';
import ReactDOM from 'react-dom/client';
// import { UserContext, ThemeContext } from './05_useContext 的使用/context';
import { UserContext, TokenContext } from './12_自定义 Hooks/context';
// import App from './01_不使用 Hook/App';
// import App from './02_计数器实现对比/App';
// import App from './03_useState 的使用/App'
// import App from './04_useEffect 的使用/05_执行时机-控制回调执行'
// import App from './05_useContext 的使用/App'
// import App from './06_useReducer 的使用（了解）/App'
// import App from './07_useCallback 的使用/App.jsx'
// import App from './08_useMemo 的使用/App'
// import App from './09_useRef 的使用/02_useRef 绑定值-解决闭包陷阱'
// import App from './10_useImperativeHandle 的使用/App';
// import App from './11_useLayoutEffect 的使用/02_修改数字-useEffect 和 useLayoutEffect 的实现对比';
import App from './12_自定义 Hooks/02_Context 获取数据'

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <UserContext.Provider value={{ name: 'jack', age: 20 }}>
//     <ThemeContext.Provider value={{ color: 'red', fontSize: '3em' }}>
//       <App />
//     </ThemeContext.Provider>
//   </UserContext.Provider>
// )
root.render(
  <UserContext.Provider value={{ name: 'jack', age: 20 }}>
    <TokenContext.Provider value={'eyJhbGci'}>
      <App />
    </TokenContext.Provider>
  </UserContext.Provider>
)
