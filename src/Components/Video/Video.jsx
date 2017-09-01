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
      currentTime: 0,
      courseVal: false,
    }
    this.play = this.play.bind(this)
    this.end = this.end.bind(this)
    this.onTimeUpdate = this.onTimeUpdate.bind(this)
  }


play(e){
console.log('the video is playing')
let user = localStorage.getItem('ind')
let vid = this.props.video_id
fetch(`/badges/update/${vid}/${user}`,{
  method: 'POST',
  headers:{
    'content-type': 'application/json',
  }
})
}

onTimeUpdate(e){
  console.log(e)
}

end(){
  console.log('video ended')
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

fetch(`/badges/updatec/${vid_id}/${user}`,{
  method: 'POST',
  headers:{
    'content-type': 'application/json',
  }
})
  console.log(this.props.course_val, this.props.part_val, 'bitch')
}

  render(){
    const {className, src, allowFullScreen, watched, video_id, course, video_num, course_val, part_val} = this.props
    return(
    <div className={className} >
      {(course==true) ?
        <Vimeo
            videoId={ video_num }
            onPlay={this.play}
            className="vimeo_vid_course"
            onTimeupdate={this.onTimeUpdate}
            onEnded={this.end} />
            :
      <div className="grid col-md-4 col-sm-6 col-xs-12">
          <figure className="effect-lily">
            <Vimeo
            videoId={ video_num }
            className="vimeo_vid" />

            <figcaption>
              <div className="editContent" style={{outline: 'none', textShadow:'1px 1px #000000',  cursor: 'inherit'}}>
                <h2>Item <strong>3</strong></h2>
              </div>
              <div className="editContent" style={{outline: 'none', textShadow:'1px 1px #000000', cursor: 'inherit'}}>
                <p>Beautifully subtle animated hover effect for your gallery</p>
              </div>
              {((watched==false && course==true) ||(watched==true))? null : <Link to={`/courses/${video_id}`}>Quiz</Link>}
              <a href={`video/${video_id}`}></a>
            </figcaption>
          </figure>
        </div>
      }
    </div>
    )
  }
}


