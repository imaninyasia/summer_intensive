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
      courses: []
    }
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
<div>
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
                      trial={this.props.trial}/>
                      ):
                    <span> Currently 0 Courses </span>
                }

</div>

)
}
}
