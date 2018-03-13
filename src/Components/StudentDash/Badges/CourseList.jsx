import React, { Component } from 'react';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../StudentDash.css'
import{PartList} from './PartList.jsx'
import Course from './Course.jsx'
export default class CourseList extends Component{

constructor(props){
    super(props)
    this.state= {
      loading: false,
      courses: [],
      final: false
    }
}
shouldComponentUpdate(){
if(!this.props.student){
  for(let i=0; i<7; i++){
    this.forceUpdate()
    i++
  }
  this.setState({final:true})
}else
{
  let user=this.props.student
  this.setState({loading: true})
    fetch(`/badges/courses/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(courses =>
      this.setState({
      courses,
      loading: false,
    })
      )
    this.forceUpdate()
    return false
}
return true
}
componentWillMount(){
  let user = localStorage.getItem('ind')
     this.setState({loading: true})
    fetch(`/badges/courses/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(courses =>
      this.setState({
      courses,
      loading: false
    })
      )
}
render(){
  const {loading, courses} = this.state
return(
<div style={{height:'500px'}}id="isIt">
<Course />
{(loading)?
                  <span>loading...</span>:
                  null
                }
{(courses.length)?
                  courses.map(
                    (course, index) =>
                <Course
                      key={index}
                      name={course.name}
                      replicate={course.replicate}
                      modify = {course.modify}
                      create = {course.create_}
                      progress={course.progress}
                      trial={this.props.trial}
                      student={this.props.student}/>
                      ):
                    <span> Currently 0 Courses </span>
                }

</div>

)
}
}
