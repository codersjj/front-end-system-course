// var message = 'Hello xiaoming'
// console.log(message)

// console.log(message.length)

// 以前的解决方案：使用立即执行函数
// (function() {
//   var message = 'Hello xiaoming'
//   console.log(message)

//   console.log(message.length)
// })()

var xmModule = (function() {
  var xmModule = {}

  var message = 'Hello xiaoming'
  console.log(message)

  console.log(message.length)

  xmModule.message = message
  return xmModule
})()

// 但从 ES6 开始，可以用 ES Module 了，通过 import/export 关键字就可以导入导出模块中的东西了。不过为了适配大多数浏览器，它还是会被打包工具转成 ES5 中的立即执行函数