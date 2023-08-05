import { useState, useEffect } from 'react'

function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function scrollListener() {
      console.log(`scrollX: ${window.scrollX}, scrollY: ${window.scrollY}`)
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    scrollListener()

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return [scrollX, scrollY]
}

export default useScrollPosition