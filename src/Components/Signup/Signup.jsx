import React, { Component } from 'react';
import { PropTypes} from 'prop-types';
import {connect} from 'react-redux';

export class Signup extends Component {

  constructor(props){
    super(props)
    this.state = {
      validPasswords: true,
      email: null,
      password: null,
      passwordConfirm: null
    }
    this.submit = this.submit.bind(this)
    this.email = this.email.bind(this)
    this.password = this.password.bind(this)
    this.passwordConfirm = this.passwordConfirm.bind(this)
  }

  email(e){
    this.setState({email: e.target.value})
  }
  password(e){
    this.setState({password: e.target.value})
  }
  passwordConfirm(e){
    this.setState({passwordConfirm: e.target.value})
  }
  submit(e){
    e.preventDefault()


       let user = []
    if (this.state.password == this.state.passwordConfirm) {
      if (this.state.email!='admin.mail')
      {
        let admin = false
       this.props.userSignupRequest(this.state, admin)
      .then((res)=>res.json())
      .then((data) =>{
        user=data.user_id
        this.props.dispatch(this.props.auth(data))
        localStorage.setItem('token', data.token)
      localStorage.setItem('ind', data.email)
       fetch('/user/user/'+user, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })

       this.props.addFlashMessage({
        type:'success',
        text: 'you have signed up successfully'})
       this.props.next.props.history.push('/dashboard')
      })

    } else if(this.state.email=='admin.mail')
    {
      let admin = true
      this.props.userSignupRequest(this.state, admin)
      .then((res) =>res.json())
      .then(json=>json)
      .then(data=>{
        console.log(data)
        this.props.dispatch(this.props.auth(user))
      this.props.addFlashMessage({
        type:'success',
        text: 'Admin has signed up successfully'})
      localStorage.setItem('token', data.token)
      localStorage.setItem('ind', data.email)
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
            <input id="signup-email" onChange={this.email} required type="email" placeholder="Email" className="form-control" />
          </div>
           <div className="form-group">
            <input id="signup-password" onChange={this.password} type="password" required placeholder="Password" className="form-control" />
          </div>
          <div className="form-group">
            <input id="signup-password-confirm" onChange={this.passwordConfirm} required type="password" placeholder="Confirm Password" required className="form-control" />
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
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired
}
export default connect()(Signup)
