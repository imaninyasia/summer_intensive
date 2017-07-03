import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../QuizList/QuizList.jsx'
import './Video.css'
import Vimeo from 'react-vimeo';
export default class Video extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false
    }
    this.videoFrame = this.videoFrame.bind(this)
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
 window.addEventListener("message", this.handleFrameTasks);
}
 componentWillUnmount() {
 window.removeEventListener("message", this.handleFrameTasks);
 }
 handleFrameTasks(e){
  var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

  console.log(e)
  console.log(e.data)

}
end(e){
  console.log(e)
console.log('the video has ended')
}
  render(){
    const {className, src, allowFullScreen, watched, video_id, course} = this.props
    return(
    <div className={className}>
      <h1>Video ID:{video_id}</h1>
      <iframe onEnded={this.end} onTimeUpdate={this.end} onClick={this.videoFrame} width="560" height="315" src={src}  allowFullScreen></iframe>
      {((watched==false && course==true) ||(watched==true))? <span> watched video </span> : <Link to={`/courses/${video_id}`}>Quiz</Link>
                                                  }




    </div>
    )
  }
}


