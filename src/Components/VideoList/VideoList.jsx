import React, { Component } from 'react'

export default class VideoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      watchedVideos: false
    }
  }

  render(){
    const { watchedVideos } = this.state
    return(
    <div>
    <h1>Student Video List</h1>

    {(watchedVideos? <videos /> : <videos watched={false} />)}
    </div>
  )
}
}
