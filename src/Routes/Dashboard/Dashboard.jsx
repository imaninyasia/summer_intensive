import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
export default class Dashboard extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: true,
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
  render(){
    const admin = this.state.admin
    return(
      <div>
      <h1>Dashboard</h1>
      {(admin==true) ? <UserList /> : <VideoList history={this.props}/>}
      <button onClick={this.logoutnow}>logout</button>
      <footer> Created by Imani Fecu </footer>
      </div>
      )
  }
}
