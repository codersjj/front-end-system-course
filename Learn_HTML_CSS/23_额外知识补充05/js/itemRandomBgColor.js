const itemEls = document.querySelectorAll('.item')
itemEls.forEach(item => {
  item.style.backgroundColor = getRandomBgColor()
})

function getRandomBgColor() {
  return `rgb(${Math.random() * 256},${Math.random() * 256},${Math.random() * 256})`
}