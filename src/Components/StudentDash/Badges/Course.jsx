
import React, { Component } from 'react';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../StudentDash.css'
import PartList from './PartList.jsx'
export default class Course extends Component{

  constructor(props){
    super(props)
    this.state ={
      loading: false,
      show: 'course',
      complete: 0
    }
    this.completedCourse = this.completedCourse.bind(this)
  }
completedCourse(parts3){
  if(parts3){
  let complete = 0
   for (let i=0; i<parts3.length; i++){
    if(parts3[i].progress=='completed'){
      complete ++
    }
  }
  if (complete==3){
    console.log('everything done')
  }
}

}
render(){
let {admin, progress, name} = this.props


const course = (
  <Tooltip id="tooltip"><strong>Part {name} </strong> </Tooltip>)
   return(

    <div className={this.state.show}>
    {(!name)? null :

      <OverlayTrigger placement="top" overlay={course}>
      {(progress==true) ? <img id='course'src="http://iconshow.me/media/images/ui/ios7-icons/png/512/circle-filled.png" />
      : <img id='course'src="http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png" />


    }

      </OverlayTrigger>}
      <div className="course-parts">
      <PartList
      course={name}
      trial={this.props.trial}
      completeCourse={this.completedCourse}
      student={this.props.student}/>
      </div>
    </div>
)
}

}
