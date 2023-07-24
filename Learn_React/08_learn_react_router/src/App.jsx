import React, { PureComponent } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import './style.css'
import NotFound from './pages/NotFound'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <header className='header'>
          <span>header</span>
          <div className="nav">
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/login'>登录</Link>

            {/* <NavLink> 默认会在 active 时添加 class="active"，所以我们可以给这个 active 类添加样式 */}
            {/* <NavLink to="/home">首页</NavLink>
            <NavLink to="/about">关于</NavLink> */}

            {/* <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>首页</NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'red' : '' })}>关于</NavLink> */}

            {/* <NavLink to='home' className={({ isActive }) => isActive ? 'link-active' : ''}>首页</NavLink>
            <NavLink to='about' className={({ isActive }) => isActive ? 'link-active' : ''}>关于</NavLink> */}
          </div>
          <hr />
        </header>
        <main className='content'>
          {/* 映射关系：path => Component */}
          <Routes>
            {/* 不推荐，因为每次使用 <Home /> 都会创建一个新的组件实例 */}
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Navigate /> 使用场景二： */}
            <Route path='/' element={<Navigate to='/home' />} />
            {/* 注意传入的是组件实例，所以是 <Home />，而不是类（Home） */}
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            {/* 其它路径都匹配不到时，会匹配到这里，path="*" 意味着匹配任意路径 */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <footer className='footer'>
          <hr />
        </footer>
      </div>
    )
  }
}

export default App