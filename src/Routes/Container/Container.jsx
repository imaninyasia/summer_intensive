import React, { Component } from 'react';


export default class Container extends Component{

  render(){
    return(
      <div>
      <h2>This can be a logout button</h2>
        {this.props.children}

      </div>
      )
  }
}
