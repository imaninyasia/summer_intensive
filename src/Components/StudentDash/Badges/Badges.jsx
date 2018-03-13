import React, { Component } from 'react';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../StudentDash.css'
import CourseList from './CourseList.jsx'
export default class ProfileBadges extends Component{

  constructor(props){
    super(props)
  }

render(){
let {admin, adminStudent} = this.props
   return(

 <div id="profile">
<CourseList
  trial={this.props.trial}
  student={adminStudent}/>


  </div>
)
}

}
