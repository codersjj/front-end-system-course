// actionCreators：帮助我们创建 action

const { CHANGE_NAME, ADD_NUMBER } = require('./constants')

const changeNameAction = name => ({ type: CHANGE_NAME, name })

const addNumberAction = num => ({ type: ADD_NUMBER, num })

module.exports = {
  changeNameAction,
  addNumberAction
}