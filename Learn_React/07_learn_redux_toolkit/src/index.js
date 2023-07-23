import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { StoreContext } from './hoc'
import App from './App';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* 实现和上面 react-redux 中 Provider 一样的基本功能 */}
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Provider>
  // </React.StrictMode>
)
