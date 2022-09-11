function getRandomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}
const itemEls = document.querySelectorAll('.item')
for (const itemEl of itemEls) {
  itemEl.style.backgroundColor = getRandomColor()
}