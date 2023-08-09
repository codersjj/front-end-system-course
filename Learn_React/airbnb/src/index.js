import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import 'normalize.css'
import './assets/css/index.less'
import store from './store';
import theme from './assets/theme';

// @ => src: 在 Webpack 中进行配置
// 问题：react 脚手架（create-react-app）隐藏了 Webpack 的配置
// 解决方案一：npm run eject
// （推荐）解决方案二：craco -> create react app configuration override

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback='loading'>
      <HashRouter>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Provider>
      </HashRouter>
    </Suspense>
  // </React.StrictMode>
);
