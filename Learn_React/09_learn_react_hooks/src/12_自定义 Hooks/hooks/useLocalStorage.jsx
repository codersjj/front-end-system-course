import { useState, useEffect } from "react"

function useLocalStorage(key) {
  // 1. 通过 key，从 localStorage 中获取数据，再使用该数据创建组件的 state
  const [item, setItem] = useState(() => {
    const item = localStorage.getItem(key)
    if (!item) return ''
    return JSON.parse(item)
  })

  // 2. 监听数据的变化，一旦发生改变就存储新的数据到 localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(item))
  }, [key, item])

  // 3. 将 item 和 setItem 操作返回给组件，让组件可以使用和修改值
  return [item ,setItem]
}

export default useLocalStorage