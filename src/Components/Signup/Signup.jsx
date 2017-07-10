import React, { PropTypes, Component } from 'react';

export default class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault()
    console.log('signup button pressed')
    let user = []
    if (this.refs.password.value == this.refs.confirm.value) {
      if (this.refs.username != "admin"){
        let admin = false
      fetch(`/user/signup/${admin}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then((r)=>r.json())
      .then((data) =>{
        user=data.user_id
        console.log('sending non-admin to dashboard', data)

       fetch('/user/user/'+user, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
       this.props.next.props.history.push('/dashboard')
      })

    } else {
      let admin = true
      fetch(`/user/signup/${admin}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.refs.username.value,
        password: this.refs.password.value
      })
    })
      .then(() =>{
        console.log('sending admin to dashboard')
      this.props.next.props.history.push('/dashboard')

      })

    }
  }
    else
      console.log('password not the same')
  }

  render(){

    return(
          <div>

          <form onSubmit={this.submit} className="signup-form">
            <div>
              <label htmlFor="signup-username">Username</label>
              <input id="signup-username" ref="username" type="text" required />
            </div>
            <div>
            <label htmlFor="signup-password">Password</label>
              <input id="signup-password" ref="password" type="password" required />
            </div>
            <div>
            <label htmlFor="signup-username">Username</label>
              <input id="signup-password-confirm" ref="confirm" type="password" required />
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
