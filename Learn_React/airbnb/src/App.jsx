import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <div className='app'>
        <AppHeader />
        <div className="page">
          {useRoutes(routes)}
        </div>
        <AppFooter />
      </div>
    </ConfigProvider>
  )
})

export default App