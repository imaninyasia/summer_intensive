import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
export default class Dashboard extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false
    }
  }

  render(){
    const admin = this.state.admin
    return(
      <div>
      <h1>Dashboard</h1>
      {(admin==true) ? <UserList /> : <VideoList />}

      <footer> Created by Imani Fecu </footer>
      </div>
      )
  }
}
