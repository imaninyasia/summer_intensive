import React, { Component } from 'react';
import { PropTypes} from 'prop-types';
export default class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {
      validPasswords: true
    }
    this.submit = this.submit.bind(this)
  }

  submit(e){
    e.preventDefault()
    let user = []
    if (this.refs.password.value == this.refs.confirm.value) {
      if (this.refs.email!='admin.mail')
      {
        let admin = false
      fetch(`/user/signup/${admin}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    })
      .then((r)=>r.json())
      .then((data) =>{
        user=data.user_id
        localStorage.setItem('token', data.token)
      localStorage.setItem('ind', data.email)
       fetch('/user/user/'+user, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    })
       this.props.next.props.history.push('/dashboard')
      })

    } else if(this.refs.email=='admin.mail')
    {
      let admin = true
      fetch(`/user/signup/${admin}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.refs.email.value,
        password: this.refs.password.value
      })
    })
      .then(() =>{
      this.props.next.props.history.push('/dashboard')

      })

    }
  }
    else
      this.setState({validPasswords: false})
        }

  render(){
    let validPasswords=this.state.validPasswords
    return(
          <div>
          <form onSubmit={this.submit} >
           <div className="form-group">
            <input id="signup-email" required type="email" ref="email" placeholder="Email" className="form-control" />
          </div>
           <div className="form-group">
            <input id="signup-password" ref="password" type="password" required placeholder="Password" className="form-control" />
          </div>
          <div className="form-group">
            <input id="signup-password-confirm" required ref="confirm" type="password" placeholder="Confirm Password" required className="form-control" />
          </div>
 <button onClick={this.submit} className="btn btn-primary btn-block" style={{outline: 'none', cursor: 'inherit', outlineOffset: '-2px', borderRadius: '4px', fontSize: '14px', backgroundColor: 'rgb(22, 160, 133)'}} src="http://placehold.it/800x600">Signup</button>
            </form>
            {(validPasswords == true)? null : <h5 style={{color: 'red'}}>Passwords not the same</h5> }
          </div>
    )
  }
}
Signup.defaultProps = {
  email: "imani",
  password: "imani",
  confirm: "imani"
}
Signup.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired
}
