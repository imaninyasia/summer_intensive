import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../QuizList/QuizList.jsx'
import './UnwatchedVideo.css'
import Vimeo from 'react-vimeo';
import fetch from 'isomorphic-fetch';
export default class UnwatchedVideo extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      duration: 0,
      currentTime: 0
    }
    this.videoFrame = this.videoFrame.bind(this)
    this.timeupdate = this.timeupdate.bind(this)
    this.play = this.play.bind(this)
  }
  videoFrame(){
    e.preventDefault()
    console.log('clicked video frame')
  }
  loaded(e){
    console.log(e)
    console.log(e.target)
  }
  componentDidMount() {
 window.addEventListener("message", this.timeupdate);
}
 componentWillUnmount() {
 window.removeEventListener("message", this.handleFrameTasks);
 }
 handleFrameTasks(e){
  console.log(e)
  // console.log(e.data)

}
timeupdate(e){
  let duration
  let currentTime
  if (e.data.event = "timeupdate"){
    this.setState({
  duration: e.data.data.duration,
  currentTime: e.data.data.seconds
})
 console.log(this.state.duration)
  console.log(this.state.currentTime)

  }
  if (this.state.currentTime < this.state.duration && this.state.currentTime>this.state.duration-1){
    console.log('ended')
    let vid_id = this.props.video_id
    let user = localStorage.getItem('ind')
     fetch('/videos/update/'+vid_id, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        watched: true,
        user: user
      })
    })

  }


}
play(e){

this.setState({
  duration: e.data.data.duration
})
console.log('the video is playing')

}
  render(){
    const {className, src, allowFullScreen, watched, video_id, course, video_num} = this.props
    return(

    <div className={className}>

    <h1>Video ID:{video_id}</h1>
     <Vimeo onPlay={this.play}
            className="vimeo_vid"
            videoId={ video_num } />,



      {((watched==false && course==true) ||(watched==true))? null : <Link to={`/courses/${video_id}`}>Quiz</Link>
                                                  }




    </div>
    )
  }
}


