import React, {Component, propTypes} from 'react';
import {connect} from 'react-redux';
import {addFlashMessage} from '../src/Routes/Redux/actions.js'
export default function(ComposedComponent){
  class Authenticate extends Component{
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.props.addFlashMessage({
          type: 'error',
          text: 'You need to login to access this page'
        })
        this.props.history.push('/')
      }
    }
    componentWillUpdate(nextProps){
      if(!nextProps.isAuthenticated){
        this.props.history.push('/')
      }
    }
    render(){
      return(
      <ComposedComponent {...this.props} />
      )
    }
  }
  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired
  }
  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  function mapStateToProps(state){
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }
  return connect(mapStateToProps, {addFlashMessage})(Authenticate);
}
