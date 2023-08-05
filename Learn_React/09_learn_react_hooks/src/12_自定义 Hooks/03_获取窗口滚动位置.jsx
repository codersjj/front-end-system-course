import React, { memo, useEffect, useState } from 'react'
import useScrollPosition from './hooks/useScrollPosition'
import './style.css'

const Home = memo(() => {
  // const [scrollX, setScrollX] = useState(0)
  // const [scrollY, setScrollY] = useState(0)

  // useEffect(() => {
  //   const scrollListener = () => {
  //     console.log(`scrollX: ${window.scrollX}, scrollY: ${window.scrollY}`)
  //     setScrollX(window.scrollX)
  //     setScrollY(window.scrollY)
  //   }

  //   window.addEventListener('scroll', scrollListener)
  //   return () => {
  //     window.removeEventListener('scroll', scrollListener)
  //   }
  // }, [])
  const [scrollX, scrollY] = useScrollPosition()

  return <h2>Home page, scrollX: {scrollX}, scrollY: {scrollY}</h2>
})

const About = memo(() => {
  // const [scrollX, setScrollX] = useState(0)
  // const [scrollY, setScrollY] = useState(0)

  // useEffect(() => {
  //   const scrollListener = () => {
  //     console.log(`scrollX: ${window.scrollX}, scrollY: ${window.scrollY}`)
  //     setScrollX(window.scrollX)
  //     setScrollY(window.scrollY)
  //   }

  //   window.addEventListener('scroll', scrollListener)
  //   return () => {
  //     window.removeEventListener('scroll', scrollListener)
  //   }
  // }, [])
  const [scrollX, scrollY] = useScrollPosition()

  return <h2>About page, scrollX: {scrollX}, scrollY: {scrollY}</h2>
})

const App = memo(() => {
  return (
    <div className='app'>
      <h1>App root component</h1>
      <Home />
      <About />
    </div>
  )
})

export default App