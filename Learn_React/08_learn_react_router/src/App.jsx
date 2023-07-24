import React, { PureComponent } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <header className='header'>
          <span>header</span>
          <div className="nav">
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>
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