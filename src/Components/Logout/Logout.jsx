import React, { Component, propTypes } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import './Logout.css';
class Logout extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props}
    }
  this.logoutnow = this.logoutnow.bind(this)
  }
   logoutnow() {
      localStorage.removeItem('ind');
      localStorage.removeItem('token');
      this.dispatch(this.props.logout())
  }
  render(){
    return(
      <div className="Ilog">
      <Link  style={{color: "rgba(255, 255, 255, 0.8)", fontWeight: "400", textTransform: "uppercase"}}
      onClick={this.logoutnow} to='/'>Logout</Link>
      </div>
      )
  }

}

Logout.propTypes = {
  logout: React.PropTypes.func.isRequired
}

export default connect()(Logout);
