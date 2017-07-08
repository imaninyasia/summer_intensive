import Main from './Main.jsx'
import Header from './Header.jsx'
import React, { Component } from 'react';
export default class App extends Component{

constructor(props){
super(props);
}


render(){
  return(
    <div className="container">
    <Header />
    <Main />
    <footer>this is a footer</footer>
    </div>
    )
}
}
