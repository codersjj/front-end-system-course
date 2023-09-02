import { useEffect, useState } from "react"
import { throttle } from "underscore"

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听 window 的滚动，只需要在组件初次渲染完成后监听一次，所以第二个参数传空数组
  useEffect(() => {
    // 使用节流操作进行优化
    const scrollHandler = throttle(() => {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener("scroll", scrollHandler)

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return {
    scrollX,
    scrollY
  }
}