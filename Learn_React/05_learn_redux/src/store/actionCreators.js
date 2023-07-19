// actionCreators：帮助我们创建 action

const changeNameAction = name => ({ type: 'change_name', name })

const addNumberAction = num => ({ type: 'add_number', num })

module.exports = {
  changeNameAction,
  addNumberAction
}