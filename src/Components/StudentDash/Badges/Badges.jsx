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
    this.state ={
      loading: false,
      user: [],
      progress: {
        not_begun: "http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png",
        partial: "https://maxcdn.icons8.com/Share/icon/Astrology//first_quarter1600.png",
        complete: "http://iconshow.me/media/images/ui/ios7-icons/png/512/circle-filled.png"
                }
    }
  }

render(){
let { user, progress } = this.state
let {admin} = this.props
   return(

 <div id="profile">
<CourseList
  trial={this.props.trial}/>


  </div>
)
}

}
