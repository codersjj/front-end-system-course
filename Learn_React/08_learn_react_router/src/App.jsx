import React, { PureComponent } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './style.css'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <header className='header'>
          <span>header</span>
          <div className="nav">
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>

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
            {/* 注意传入的是组件实例，所以是 <Home />，而不是类（Home） */}
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
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