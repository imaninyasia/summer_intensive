import React, { Component } from 'react'
import Video from '../Video/Video.jsx'
export default class VideoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      watchedVideos: false
    }
    this.unwatched_link = this.unwatched_link.bind(this)
  }

  unwatched_link() {
  this.props.history.history.push('/courses')
  }
  render(){
    const { watchedVideos } = this.state
    return(
    <div>
    <h1>Student Video List</h1>
    <button onClick={this.unwatched_link}>unwatched video</button>
    {(watchedVideos? <videos /> : <videos watched={false} />)}
    </div>
  )
}
}
