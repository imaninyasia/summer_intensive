import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logout from '../Components/Logout/Logout.jsx'
export default class Header extends Component{

constructor(props){
super(props);
}


render(){
  return(

    <header id="header-1">
    <nav className="main-nav navbar-fixed-top headroom headroom--pinned">
      <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <img style={{width: '53%', paddingTop: '5%'}}src="http://www.urbanarts.org/wp-content/themes/urbanarts/img/UAP-full-logo.png" className="brand-img img-responsive" />
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
            <li className="active nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/dashboard" style={{color: "rgba(255, 255, 255, 0.8)", fontWeight: "400", textTransform: "uppercase"}} src="images/brand/bskit-logo-white-nostrap.png">Dashboard</a></li>

            <li className="nav-item dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="0" data-close-others="false" href="#" style={{outline: 'none', outlineOffset: '-2px', cursor: 'inherit'}}>Pages <i className="fa fa-angle-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="#" style={{outline: 'none', cursor: 'inherit'}}>Dropdown 1</a></li>
                <li><a href="#" style={{outline: 'none', cursor: 'inherit'}}>Dropdown 2</a></li>
                <li><a href="#" style={{outline: 'none', cursor: 'inherit'}}>Dropdown 3</a></li>
                <li><a href="#" style={{outline: 'none', cursor: 'inherit'}}>Dropdown 4</a></li>
              </ul>
            </li>
            <li className="nav-item"><Logout /></li>
          </ul>
                </div>
            </div>
    </nav>
    </header>
    )
}
}
