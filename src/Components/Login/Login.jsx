import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PropTypes} from 'prop-types';
import fetch from 'isomorphic-fetch';
import {withRouter} from "react-router-dom";

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentToken: 0,
      correctPass: true,
      status: "You've entered the wrong email or password"
    }
    this.submit = this.submit.bind(this)
  }
   submit(e) {
    e.preventDefault()
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    })
    .then(r => r.json())
    .then((user) => {
      console.log(user, 'user')
      if (user.error == 'no email'){
          this.setState({correctPass: false})
          this.setState({status: "This email hasn't been assigned"})
        }else if(user.error =='invalid password'){
          this.setState({correctPass: false})
          this.setState({status: "You've entered the wrong email or password"})
        }
        else{
      this.setState({correctPass: true})
      localStorage.setItem('token', user.token)
      localStorage.setItem('ind', user.email)
      this.props.dispatch(this.props.auth(user))
      this.props.next.props.history.push("/dashboard")
      }
      })
}

  render(){
    const {email, password} = this.props
    const {correctPass, status} = this.state
    return(
          <div>
          {(correctPass == true)? null : <h5 style={{color: 'red'}}>{status}</h5> }

            <form onSubmit={this.submit} >
          <div className="form-group">
            <input id="email" type="text" required ref="email" placeholder="Email" className="form-control" />
            </div>
          <div className="form-group">
            <input id="password" ref="password" type="password" required placeholder="Password" className="form-control" />
            </div>
 <button onClick={this.submit} className="btn btn-primary btn-block" style={{outline: 'none', cursor: 'inherit', outlineOffset: '-2px', borderRadius: '4px', fontSize: '14px', backgroundColor: 'rgb(22, 160, 133)'}} src="http://placehold.it/800x600">Login</button>
            </form>
          </div>
    )
  }
}
Login.defaultProps = {
  email: "imani",
  password: "imani"
}
Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  auth: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Login)
