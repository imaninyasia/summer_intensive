import React, { PropTypes, Component } from 'react';
import fetch from 'isomorphic-fetch';
import {withRouter} from "react-router-dom";

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentToken: 0
    }
    this.submit = this.submit.bind(this)
  }
   submit(e) {
    e.preventDefault()
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
    .then(r => r.json())
    .then((user) => {
      let data = user
      if (data.token == undefined || data.token == null){
        console.log('is null')
        console.log('error at login')
      }else {
      console.log(user, 'is user')
      localStorage.setItem('token', user.token)
      localStorage.setItem('ind', user.username)
      console.log(user.admin)
      if (user.admin == true){
        console.log('admin')
        let val = user.admin
        val.toString()
      this.props.next.props.history.push("/dashboard")
      }else if (user.admin == false){
        let val = user.admin
        val.toString()
        this.props.next.props.history.push('/dashboard/')
      }
      }
      }

      )
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
              <input id="password" ref="password" type="password" required />
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
