import React from "react"
import { Navigate } from "react-router-dom"
import Demo from "@/views/demo"

// 同步加载
// import Home from '@/views/home'
// import Detail from '@/views/detail'
// import Entire from '@/views/entire'

// 异步加载：使用 import() 异步加载页面会使得页面多渲染一次
const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/demo',
    element: <Demo />
  }
]

export default routes