// document.querySelectorAll('a').forEach(aLink => {
//   aLink.addEventListener('mousemove', (e) => {
//     // console.log(e.offsetX, e.offsetY)
//     const linkElement = e.target
//     linkElement.style.setProperty('--offsetX', `${e.offsetX}px`)
//     linkElement.style.setProperty('--offsetY', `${e.offsetY}px`)
//   })
// })

document.querySelector('body').addEventListener('mousemove', (e) => {
  // console.log(e.target, e.currentTarget)
  const bodyElement = e.currentTarget
  bodyElement.style.setProperty('--clientX', `${e.clientX}px`)
  bodyElement.style.setProperty('--clientY', `${e.clientY}px`)
})

function setLinksPositions() {
  document.querySelectorAll('a').forEach(aEL => {
    const rect = aEL.getBoundingClientRect()
    aEL.style.setProperty('--positionX', `${rect.x}px`)
    aEL.style.setProperty('--positionY', `${rect.y}px`)
  })
}
window.addEventListener('load', setLinksPositions)
window.addEventListener('resize', setLinksPositions)
window.addEventListener('scroll', setLinksPositions)