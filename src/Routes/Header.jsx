import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logout from '../Components/Logout/Logout.jsx'
export default class Header extends Component{

constructor(props){
super(props);
}


render(){
  return(
    <header>
      <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>dashboard</Link></li>
        <li><Logout /></li>
        </ul>
      </nav>
    </header>
    )
}
}
