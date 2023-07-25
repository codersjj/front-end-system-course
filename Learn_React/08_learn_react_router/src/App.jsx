import React from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import HomeSonglist from './pages/HomeSonglist'
import About from './pages/About'
import Login from './pages/Login'
import Category from './pages/Category'
import Order from './pages/Order'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'
import './style.css'

export function App(props) {
  // hook 只能放到函数组件的顶层，不能在嵌套函数中
  const navigate = useNavigate()

  // navigateTo(path) {
  //   // React Hook "useNavigate" cannot be called in a class component. React Hooks must be called in a React function component or a custom React Hook function
  //   const navigate = useNavigate()
  //   navigate(path)
  // }

  function navigateTo(path) {
    // const navigate = useNavigate()
    navigate(path)
  }

  return (
    <div className='app'>
      <header className='header'>
        <span>header</span>
        <div className="nav">
          <Link to='/home'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/login'>登录</Link>
          {/* <button onClick={e => this.navigateTo('/category')}>分类</button>
          <span onClick={e => this.navigateTo('/order')}>订单</span> */}
          <button onClick={e => navigateTo('/category')}>分类</button>
          <span onClick={e => navigateTo('/order')}>订单</span>
        </div>
        <hr />
      </header>
      <main className='content'>
        {/* 映射关系：path => Component */}
        <Routes>
          {/* <Navigate /> 使用场景二： */}
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />}>
            <Route path='/home' element={<Navigate to='/home/recommend' />} />
            <Route path='/home/recommend' element={<HomeRecommend />} />
            <Route path='ranking' element={<HomeRanking />} />
            <Route path='/home/songlist' element={<HomeSonglist />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/category' element={<Category />} />
          <Route path='/order' element={<Order />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <footer className='footer'>
        <hr />
      </footer>
    </div>
  )
}

export default App