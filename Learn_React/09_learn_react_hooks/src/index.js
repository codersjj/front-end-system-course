import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContext, ThemeContext } from './05_useContext 的使用/context';
// import App from './01_不使用 Hook/App';
// import App from './02_计数器实现对比/App';
// import App from './03_useState 的使用/App'
// import App from './04_useEffect 的使用/05_执行时机-控制回调执行'
import App from './05_useContext 的使用/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={{ name: 'jack', age: 20 }}>
    <ThemeContext.Provider value={{ color: 'red', fontSize: '3em' }}>
      <App />
    </ThemeContext.Provider>
  </UserContext.Provider>
)
