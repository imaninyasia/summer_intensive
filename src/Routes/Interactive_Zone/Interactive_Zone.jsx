import React, { Component } from 'react';
export default class Interactive_Zone extends Component{
  constructor(props){
    super(props);
    this.state = {
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
    return(
      <div>
        <h1>Courses</h1>
        <button onClick={this.logoutnow}>logout</button>
        <footer> Created by Imani Fecu </footer>

      </div>
      )
  }
}
