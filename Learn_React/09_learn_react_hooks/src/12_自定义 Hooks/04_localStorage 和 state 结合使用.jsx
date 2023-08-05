import React, { memo, useEffect, useState } from 'react'
import { useLocalStorage } from './hooks'

const App = memo(() => {
  // const [token, setToken] = useState(() => {
  //   // 通过 key，从 localStorage 中获取数据
  //   const token = localStorage.getItem('token')
  //   if (!token) return ''
  //   return JSON.parse(token)
  // })
  // // “自动化”
  // useEffect(() => {
  //   localStorage.setItem('token', JSON.stringify(token))
  // }, [token])
  const [token, setToken] = useLocalStorage('token')
  function handleSetToken() {
    setToken('eyJhJGdL')
    // localStorage.setItem('token', JSON.stringify('eyJhJGdL'))
  }

  // const [avatarURL, setAvatarURL] = useState(() => {
  //   const avatarURL = localStorage.getItem('avatarURL')
  //   if (!avatarURL) return ''
  //   return JSON.parse(avatarURL)
  // })
  // useEffect(() => {
  //   localStorage.setItem('avatarURL', JSON.stringify(avatarURL))
  // }, [avatarURL])
  const [avatarURL, setAvatarURL] = useLocalStorage('avatarURL')
  function handleSetAvatarURL() {
    setAvatarURL('https://star.cn/star.png')
    // localStorage.setItem('avatarURL', JSON.stringify('https://star.cn/star.png'))
  }

  return (
    <div>
      <h1>App</h1>
      <h2>token: {token}</h2>
      <button onClick={handleSetToken}>设置 token</button>
      <h2>avatarURL: {avatarURL}</h2>
      <button onClick={handleSetAvatarURL}>设置新头像地址</button>
    </div>
  )
})

export default App