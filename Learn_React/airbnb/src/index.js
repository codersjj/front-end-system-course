import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';

import App from './App';
import 'normalize.css'
import './assets/css/index.less'
import store from './store';
import theme from './assets/theme';

// @ => src: 在 Webpack 中进行配置
// 问题：react 脚手架（create-react-app）隐藏了 Webpack 的配置
// 解决方案一：npm run eject
// （推荐）解决方案二：craco -> create react app configuration override

// 方案一：自定义 mui 的主题色
// https://mui.com/material-ui/customization/palette/
const materialTheme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#ffa726',
  //     light: '#ffb74d',
  //     dark: '#f57c00',
  //     contrastText: '#fff',
  //   }
  // }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <HashRouter>
      {/* 这里需要改为 Provider 包裹 Suspense，因为如果是 Suspense 包裹 Provider，AppHeader 是不会监听到（store.subscribe）异步加载的页面（我们项目的路由中用了懒加载（import() 函数，webpack 会对其进行单独打包））中发出去的事件的。因为 Suspense 是异步加载的，如果没有被 Provider 包裹就意味着它异步加载完后的东西是不会被 Provider 监听到的  */}
      <Provider store={store}>
        <Suspense fallback='loading'>
          <ThemeProvider theme={theme}>
            <MaterialThemeProvider theme={{ [THEME_ID]: materialTheme }}>
              <App />
            </MaterialThemeProvider>
          </ThemeProvider>
        </Suspense>
      </Provider>
    </HashRouter>
  // </React.StrictMode>
);
