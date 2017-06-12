import React, { Component } from 'react';
import FaShield from 'react-icons/lib/fa/shield'
export default class User extends Component{

  render(){
     const {name, thumbnail, email, admin} = this.props

     return(
        <div className="user">
        <h1> {name} {(admin) ? <FaShield /> : null}</h1>
        <img src={thumbnail} alt="profile picture" />
        <p>{email}</p>
        </div>
      )
  }

}
