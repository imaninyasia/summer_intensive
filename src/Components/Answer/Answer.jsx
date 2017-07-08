import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from '../User/User.jsx';
import './UserList.css'

export default class Answer extends Component {

  constructor(props){

  }


  render(){
    const {user_id, answer, question_id} = this.props
    return(
    <div>
    <h3>This is the question</h3>
    <p>this is the answer</p>
    </div>
    )
  }

}
