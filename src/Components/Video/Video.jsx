import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../QuizList/QuizList.jsx'
import './Video.css'
import Vimeo from 'react-vimeo';
import fetch from 'isomorphic-fetch';
export default class Video extends Component{
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
  console.log(e.data)
  console.log(duration)
  if (e.data.event = "timeupdate"){
    this.setState({
  duration: e.data.data.duration,
  currentTime: e.data.data.seconds
})

  }

  if (this.state.currentTime < this.state.duration && this.state.currentTime>this.state.duration-3){
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
    console.log(this.state.duration)
    console.log(this.state.currentTime)
    console.log(course, 'course')
    return(
    <div className={className} >
      {(course==true) ?<Vimeo onPlay={this.play}
            className="vimeo_vid"
            videoId={ video_num } />
            :
      <div className="grid col-md-4 col-sm-6 col-xs-12">
          <figure className="effect-lily">
            <Vimeo onPlay={this.play}
            className="vimeo_vid"
            videoId={ video_num } />
            <figcaption>
              <div className="editContent" style={{outline: 'none', cursor: 'inherit'}}>
                <h2>Item <strong>3</strong></h2>
              </div>
              <div className="editContent" style={{outline: 'none', cursor: 'inherit'}}>
                <p>Beautifully subtle animated hover effect for your gallery</p>
              </div>
              {((watched==false && course==true) ||(watched==true))? null : <Link to={`/courses/${video_id}`}>Quiz</Link>}
              <a href="#"></a>
            </figcaption>
          </figure>
        </div>
      }
    </div>
    )
  }
}


