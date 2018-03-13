import React, { Component } from 'react';
import * as actions from '../../Routes/Redux/actions.js'
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { PropTypes} from 'prop-types';
import {userSignupRequest} from '../Redux/actions.js'
import {addFlashMessage} from '../Redux/actions.js'
import {auth} from '../Redux/actions.js'
import Login from '../../Components/Login/Login.jsx';
import Signup from '../../Components/Signup/Signup.jsx';
 class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: {props},
      signupClicked: false,
    }
    this.signupButton = this.signupButton.bind(this)
  }
signupButton(){
this.setState({signupClicked: !this.state.signupClicked})
}
render(){
  let signupClicked = this.state.signupClicked
  const {userSignupRequest, addFlashMessage} =this.props;
    return(
<section style={{maxHeight: '100%', height: '1036px'}}id="promo-1" className="content-block promo-1 min-height-600px bg-offwhite">
    <div className="container">

      <div className="row">

        <div className="col-lg-4 col-lg-offset-4">
          <div className="editContent">
            <h2>Urban Arts Online Learning&nbsp;</h2>
          </div>
          <div className="editContent">
            <p>Suspendisse ac pretium sapien, placerat lacinia enim. Fusce eu elit quis lacus cursus mollis. In feugiat diam id sem consectetur, id accumsan risus venenatis.</p>
          </div>
          {(signupClicked==false)? <Login
            auth={auth}
            next={this.state.history}/> :
          <Signup
          auth={auth}
          userSignupRequest={userSignupRequest}
          addFlashMessage={addFlashMessage}
          next={this.state.history}/> }
          {(signupClicked==true)? null : <h5 onClick={this.signupButton} style={{textAlign: 'center'}}>need to signup?</h5>}
          {(signupClicked==false)? null : <h5 onClick={this.signupButton} style={{textAlign: 'center'}}>need to login?</h5>}


        </div>


      </div>

    </div>


  </section>

      )
  }

}
Landing.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  auth: React.PropTypes.func.isRequired
}
export default connect((state)=>{return {} }, {userSignupRequest, addFlashMessage, auth})(Landing);
