import Main from './Main.jsx'
import Header from './Header.jsx'
import React, { Component, PropTypes } from 'react';
import './App.css'
import Loader from 'halogen/RingLoader';
import { connect, Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import FlashMessagesList from '../Components/FlashMessagesList/FlashMessagesList.jsx'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import * as action from './Redux/actions.js'
import configureStore from './Redux/configureStore.js'
import jwtDecode from 'jwt-decode'
const store = configureStore()
if(localStorage.token){
  store.dispatch(action.auth(
   jwtDecode(localStorage.token)))
}
export default class App extends Component{


render(){
  return(
    <Provider store={store}>
    <div>

    <Header />
    <FlashMessagesList />
    {this.props.children}
     <Main />


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
    </Provider>
    )
}
}
