import React, { Component, propTypes } from 'react';
import UserList from '../../Components/UserList/UserList.jsx'
import {getEmail} from '../Redux/actions.js'
import {connect} from 'react-redux'
import StudentDash from '../../Components/StudentDash/StudentDash.jsx'
class Dashboard extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props}
    }

  }

componentWillMount(){
    var token = localStorage.getItem('token')
    fetch('/user/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        token: token
      })
    })
    .then(r => r.json())
    .then((data) => {
       this.setState({
        admin: data.admin
      })
     })
    }

  render(){
const {userSignupRequest, addFlashMessage} =this.props;
    const admin = this.state.admin
    return(
     <div>
    {(admin==true || admin==="admin") ?
    <div>

    <section className="content-block gallery-1">

      <div className="container">

        <div className="underlined-title">
          <div className="editContent">
              <h1>Students</h1>
          </div>
          <hr />
          <div className="editContent">
            <h2>School of Interactive Arts</h2>
          </div>
        </div>

        <div className="editContent">
              <ul className="filter"><br /></ul>
        </div>


            <div className="row">
                <div id="isotope-gallery-container">
                    <UserList />

                </div>

            </div>

        </div>

    </section>


    </div> :

                      <StudentDash
                      studentE={this.props.getEmail}
                      history={this.props}/>}
</div>
      )
  }
}

Dashboard.propTypes = {
  getEmail: React.PropTypes.func.isRequired,
}
export default connect((state)=>{return {} }, {getEmail})(Dashboard);
