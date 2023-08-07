import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'normalize.css'
import './assets/css/index.less'

// @ => src: 在 Webpack 中进行配置
// 问题：react 脚手架（create-react-app）隐藏了 Webpack 的配置
// 解决方案一：npm run eject
// （推荐）解决方案二：craco -> create react app configuration override

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
