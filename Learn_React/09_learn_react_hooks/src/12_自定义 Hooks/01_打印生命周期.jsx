import React, { memo, useEffect, useState } from 'react'

function useLogLife(cName) {
  useEffect(() => {
    console.log(cName + '组件被创建了~')

    return () => {
      console.log(cName + '组件被销毁了~')
    }
  }, [cName])
}

const Home = memo(() => {
  // useEffect(() => {
  //   console.log('组件被创建了~')

  //   return () => {
  //     console.log('组件被销毁了~')
  //   }
  // }, [])
  useLogLife('Home')

  return <h2>Home page</h2>
})

const About = memo(() => {
  // useEffect(() => {
  //   console.log('组件被创建了~')

  //   return () => {
  //     console.log('组件被销毁了~')
  //   }
  // }, [])
  useLogLife('About')

  return <h2>About page</h2>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)

  // 模拟生命周期
  // useEffect(() => {
  //   console.log('组件被创建了~')

  //   return () => {
  //     console.log('组件被销毁了~')
  //   }
  // }, [])
  useLogLife('App')

  return (
    <div>
      <h1>App root component</h1>
      <button onClick={e => setIsShow(!isShow)}>切换</button>
      {isShow && <Home />}
      {isShow && <About />}
    </div>
  )
})

export default App