import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

export default class Login extends Component {
  constructor(){
    super();
  }
  nextPage(){
    console.log("hey there")
    withRouter.push('/courses')
  }
  render(){
    return(
          <div>
          <h1>Login</h1>
          <button onClick={this.nextPage}>go</button>
          </div>
    )
  }
}
