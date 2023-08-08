import React, { memo, useEffect, useState } from 'react'
import jjRequest from '@/services'

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({})

  const { title, subtitle, list } = highScore

  // 网络请求的代码
  useEffect(() => {
    jjRequest.get('/home/highscore')
      .then(res => {
        console.log(res)
        setHighScore(res)
      })
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <ul>
        {/* {
          list && list.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        } */}
        {
          list?.map(item => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
})

export default Home