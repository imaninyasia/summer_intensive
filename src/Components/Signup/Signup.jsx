import React, { PropTypes, Component } from 'react';

export default class Signup extends Component {

  constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    console.log('signup button pressed')
  }

  render(){

    return(
          <div>
          <form onSubmit={this.submit} className="signup-form">
            <div>
              <label htmlFor="signup-username">Username</label>
              <input id="signup-username" type="text" required />
            </div>
            <div>
            <label htmlFor="signup-password">Password</label>
              <input id="signup-password" type="password" required />
            </div>
            <div>
            <label htmlFor="signup-username">Username</label>
              <input id="signup-password-confirm" type="password" required />
            </div>
            <button>Submit</button>
            </form>
          </div>
    )
  }
}
Signup.defaultProps = {
  username: "imani",
  password: "imani",
  confirm: "imani"
}
Signup.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired
}
