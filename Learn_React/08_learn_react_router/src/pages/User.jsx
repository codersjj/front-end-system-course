import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    const { query } = this.props.router
    console.log(query)

    return (
      <div>
        <h4>User page</h4>
        <h4>name: {query.name}, age: {query.age}</h4>
      </div>
    )
  }
}

export default withRouter(User)