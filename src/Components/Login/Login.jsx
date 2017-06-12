import React, { PropTypes, Component } from 'react';
import {withRouter} from "react-router-dom";

export default class Login extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }
   submit(e) {
    e.preventDefault()
    console.log('username', this.refs.username.value)
    this.props.next.props.history.push('/dashboard')
  }
  nextPage(){
    console.log("hey there")
    withRouter.push('/courses')
  }
  render(){
    const {username, password} = this.props
    return(
          <div>
            <form onSubmit={this.submit} className="login-form">
              <div>
              <label htmlFor="username">Username</label>
              <input id="username" type="text" required ref="username"/>
              </div>
              <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" required />
              </div>
              <button onClick={this.submit}>submit</button>
            </form>
          </div>
    )
  }
}
Login.defaultProps = {
  username: "imani",
  password: "imani"
}
Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}
