import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
export default class Dashboard extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props}
    }
    this.logoutnow = this.logoutnow.bind(this)
  }

   logoutnow() {
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
      console.log('logged out')
      this.props.history.push('/')
  }
componentWillMount(){
    var token = localStorage.getItem('token')
    fetch('/user/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      })
    })
    .then(r => r.json())
    .then(data => (console.log(data, "verify admin"),
      console.log('set admin state here'),
       this.setState({
        admin: data.admin
      })
      // this.setState({
      //   admin: data.admin
      // })
      // )
    ))
    }

  render(){
    window.onbeforeunload = (e) =>{
    var token = localStorage.getItem('token')
    if(token==null){
      fetch('/user/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      })
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('token', token)
      console.log('the token is being set through verify')
      if(localStorage.getItem('token')==localStorage.getItem('token')){
    } else {
      console.log('error at login')
    }
    })
    } else {
      fetch('/user/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      })
    }).then(data => (console.log(data, "user info dashboard"),

      this.setState({
        admin: data.admin
      })
      ))
    }
  }
    const admin = this.state.admin
    return(
      <div>
      <h1>Dashboard</h1>
      {(admin==true) ?<UserList /> :
                      <VideoList history={this.props}/>}
      <button onClick={this.logoutnow}>logout</button>
      </div>
      )
  }
}
