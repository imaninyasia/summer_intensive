import Main from './Main.jsx'
import Header from './Header.jsx'
import React, { Component } from 'react';
export default class App extends Component{

constructor(props){
super(props);
}


render(){
  return(
    <div>
    <Header />
    <Main />
      <div className="copyright-bar bg-black">
    <div className="container">
      <div className="editContent" style={{outline: 'none', cursor: 'inherit'}}>
        <p className="pull-left small">© bskit - Bootstrap Starter Kit</p>
      </div>
      <div className="editContent" style={{outline: 'none', cursor: 'inherit'}}>
        <p className="pull-right small">Made with <span className="fa fa-heart pomegranate" style={{outline: 'none', cursor: 'inherit'}}></span> in London</p>
      </div>
    </div>
  </div>
    </div>
    )
}
}
