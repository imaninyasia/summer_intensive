import React, { Component, propTypes } from 'react';

import {Link} from 'react-router-dom';
import Logout from '../Components/Logout/Logout.jsx'
import {logout} from './Redux/actions.js'
import { connect } from 'react-redux'
class Header extends Component{

constructor(props){
super(props);
}


render(){
    let user=localStorage.getItem('ind')
    const{isAuthenticated} = this.props.auth
    const{logout}= this.props
    const userLinks=(
        <ul className="nav navbar-nav navbar-right">
        <li className="nav-item"><a href="/dashboard" style={{color: "rgba(255, 255, 255, 0.8)", fontWeight: "400", textTransform: "uppercase"}} src="images/brand/bskit-logo-white-nostrap.png">Dashboard</a></li>
        <li className="nav-item"><Logout
            logout={logout}/></li>
        </ul>
        )
    const guestLinks=(
        <span>not loggedin</span>
        )
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
                {isAuthenticated? userLinks: guestLinks}
                    <ul className="nav navbar-nav navbar-right">
                }


          </ul>
                </div>
            </div>
    </nav>
    </header>
    )
}
}
Header.propTypes= {
    auth: React.PropTypes.object.isRequired
}
function mapStateToProps(state){
    return{
        auth: state.auth
    }
}
export default connect(mapStateToProps, {logout})(Header);
