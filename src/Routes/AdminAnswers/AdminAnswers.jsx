import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import UserAnswersList from '../../Components/UserList/UserAnswersList/UserAnswersList.jsx';
export default class AdminAnswers extends Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
      <h1> User </h1>
      <UserAnswersList />
      </div>
      )
  }

}
