import Main from './Main.jsx'
import Header from './Header.jsx'
import React, { Component, PropTypes } from 'react';
import './App.css'
import Loader from 'halogen/RingLoader';
import { connect, Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

export default class App extends Component{

constructor(props){
super(props);
this.state={
  loading:true
}
}

componentWillMount(){
this.setState({loading:true})
}
componentDidMount(){
this.setState({loading:false})
}
render(){
  let loading=this.state.loading
  return(
    <div>

    <Header />
    {loading==true ? <Loader color="#26A65B" size="56px" margin="4px" />:
     <Main /> }


      <div  className="copyright-bar bg-black the_footer">
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
