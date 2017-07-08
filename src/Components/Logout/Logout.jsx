import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Logout extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props}
    }
  this.logoutnow = this.logoutnow.bind(this)
  }
   logoutnow() {
      localStorage.removeItem('ind');
      localStorage.removeItem('token');
      console.log('logged out')
  }
  render(){
    return(
      <div className="logout_button">
      <Link  onClick={this.logoutnow} to='/'>Logout</Link>
      </div>
      )
  }

}
