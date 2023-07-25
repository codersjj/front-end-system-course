import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import HomeSonglist from '../pages/HomeSonglist'
import About from '../pages/About'
import Login from '../pages/Login'
import Category from '../pages/Category'
import Order from '../pages/Order'
import User from '../pages/User'
import Detail from '../pages/Detail'
import NotFound from '../pages/NotFound'

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to='/home/recommend' />
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />
      },
      {
        path: '/home/songlist',
        element: <HomeSonglist />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes