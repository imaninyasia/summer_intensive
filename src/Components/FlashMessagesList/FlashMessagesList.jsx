import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {deleteFlashMessage} from '../../Routes/Redux/actions.js'
import FlashMessage from './FlashMessage.jsx'
class FlashMessagesList extends Component{
constructor(props){
  super(props)
}

render(){

    const messages=this.props.messages.map(message=> <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage}/>
    )

  return(
    <div>
     {messages}
    </div>
    )
}
}

FlashMessagesList.propTypes ={
  messages: React.PropTypes.array.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}
function mapStateToProps(state){
  return{
    messages: state.addFlashMessage
  }
}
export default connect(mapStateToProps, { deleteFlashMessage}) (FlashMessagesList);

