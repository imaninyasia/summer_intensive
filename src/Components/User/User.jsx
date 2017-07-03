import React, { Component } from 'react';
import FaShield from 'react-icons/lib/fa/shield'
import './User.css'
export default class User extends Component{

  render(){
     const {name, thumbnail, email, admin} = this.props

     return(
        <div className="user">
        <h1 style={{width: '400px'}}> {name} {(admin) ? <FaShield /> : null}</h1>
        <a href="#" style={{width: '400px', display: 'inline-block'}}><img src={thumbnail} alt="profile picture" /></a>
        <p style={{ display: 'inline-block'}}>{email}</p>
        </div>
      )
  }

}
