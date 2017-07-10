import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from '../User/User.jsx';
import './Answer.css'

export default class Answer extends Component {

  constructor(props){
    super(props)

  }


  render(){
    const {user, answer, question, ques_num} = this.props
    return(
    <div>
    <h3>{user}</h3>
    <h1>#{ques_num}</h1>
    <h3>Question: {question} </h3>
    <h3>Answer: {answer} this is the answer</h3>
    </div>
    )
  }

}
