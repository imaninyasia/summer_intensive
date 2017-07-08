import React, { Component } from 'react';
import Video from '../Video/Video.jsx';
import fetch from 'isomorphic-fetch';
import './VideoList.css'
import UnwatchedVideo from '../UnwatchedVideo/UnwatchedVideo.jsx'
export default class VideoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      Videos: [],
      unwatched: [],
      loading: false,
    }

  }
onLoad(data){
    console.log(data.duration)
}
   componentWillMount() {
    this.setState({loading: true})
    let user = localStorage.getItem('ind')
    console.log(user, "user local storage")
    fetch(`/videos/non/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(unwatched =>(
      console.log(unwatched, 'unwatched'),
      this.setState({
      unwatched,
      loading: false
    })
      ))
     this.setState({loading: true})
    fetch(`/videos/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(videos =>(console.log(videos, "videos list"),
      this.setState({
      videos,
      loading: false
    })
      ))
  }


  render(){
    let { unwatched, videos, loading } = this.state
    console.log(videos, 'watched')
    console.log(unwatched.video_id)
    return(
    <div>



    <h1>Student Video List</h1>
        {(loading)?
          <span>loading...</span>:
          <span style={{display: 'block'}}> videos</span>
        }
      {(videos)?
        videos.map(
          function(video, index) {
            console.log(video.video_id);
            return(
            <Video  key={index}
                    video_id={video.video_id}
                    className="youtube-frame"
                    src={video.source}
                    watched={video.watched}
                    course={false}
                    video_num={video.vimeo_id} />
                    )
                     }):
              <span> Currently 0 Videos </span>
                }
      {(unwatched)? <UnwatchedVideo  key={unwatched.video_id}
                            video_id= {unwatched.video_id}
                            className="unwatched"
                            src={unwatched.source}
                            watched={unwatched.watched}
                            course={false}
                            onLoad={this.onLoad}
                            video_num= {unwatched.vimeo_id}/> : <span>error loading new quiz video</span> }
       {(unwatched.length)? <span>unwatched vids available </span> : null}

    </div>

  )
}
}
