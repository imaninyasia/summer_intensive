import React, { Component } from 'react';

import '../StudentDash.css'
import Part from './Part.jsx'
export default class PartList extends Component{

constructor(props){
    super(props)
    this.state= {
      parts: [],
      loading: false,
      final: false
    }

}

shouldComponentUpdate(){
  if(this.state.parts.length>0){
    this.forceUpdate()
    return false
  }
if (!this.props.student){
  for (let i=0; i<6; i++){
    this.forceUpdate()
    i++
    return true
  }
}else {
    let user = this.props.student
    let course = this.props.course
     if (this.props.course){
fetch(`/badges/parts/${user}/${course}`)
    .then(response => response.json())
    .then(json => json)
    .then(parts =>
      this.setState({
      parts,
    })
      )
    this.forceUpdate()
     }
     this.forceUpdate()
     return true
}
return true
}

componentWillMount(){
  let user = localStorage.getItem('ind')
     let course = this.props.course
     if (this.props.course){
fetch(`/badges/parts/${user}/${course}`)
    .then(response => response.json())
    .then(json => json)
    .then(parts =>
      this.setState({
      parts,

    })
      )
     }

}
componentDidUpdate(){
  this.props.completeCourse(this.state.parts)
}
render(){
  const {parts, loading} = this.state
  const {course, completeCourse} = this.props

return(
<div>
{(loading)?
                  <span>loading...</span>:
                  null
                }
{(parts.length)?
                  parts.map(
                    (part, index)=>
                 <Part
                      key={index}
                      course={part.course}
                      check={course}
                      name={part.name}
                      progress={part.progress}
                      videos={part.videos}
                      video_show={this.props.trial}
                      part_id={part.part_id}
                      completeCourse={this.props.completeCourse}
                      />
                     ):
                     null
                }
</div>


)
}
}


