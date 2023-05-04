// 1. 获取 <html> 元素
const htmlEl = document.documentElement

function setRemUnit() {
  // 2. 获取 <html> 的宽度（视口的宽度）
  const htmlWidth = htmlEl.clientWidth
  // 3. 根据宽度计算 <html> 元素的 font-size 的大小
  const htmlElFontSize = htmlWidth / 10
  // 4. 将计算出来的 font-size 值设置到 <html> 元素上
  htmlEl.style.fontSize = htmlElFontSize + 'px'
}
// 保证第一次进来时可以设置一次 font-size
setRemUnit()
// 当屏幕尺寸发生变化时，实时地修改 <html> 的 font-size
window.addEventListener('resize', setRemUnit)