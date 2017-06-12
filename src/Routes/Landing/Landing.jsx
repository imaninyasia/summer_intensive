import React, { Component } from 'react';
import App from '../../Components/App/App.jsx'
import { Link } from 'react-router';
import Login from '../../Components/Login/Login.jsx'
import Signup from '../../Components/Signup/Signup.jsx'
export default class Landing extends Component{
  constructor(props){
    super(props);


  }

render(){
    return(
      <div>

        <div id='flex_sign'>

          <h1>Landing Page </h1>
         <Login />
         <Signup />
          <footer> Created by Imani Fecu </footer>
        </div>
      </div>
      )
  }

}
