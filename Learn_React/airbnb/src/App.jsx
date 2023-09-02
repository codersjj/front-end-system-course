import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { useScrollToTop } from './hooks';

const App = memo(() => {
  useScrollToTop()

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <div className='app'>
        <AppHeader />
        <Suspense fallback='loading'>
          <div className="page">
            {useRoutes(routes)}
          </div>
        </Suspense>
        <AppFooter />
      </div>
    </ConfigProvider>
  )
})

export default App