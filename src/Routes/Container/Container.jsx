import React, { Component } from 'react';


export default class Container extends Component{

  render(){
    return(
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          state:this.state
        })}
      </div>
      )
  }
}
