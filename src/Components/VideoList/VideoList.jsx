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
        let user = localStorage.getItem('ind')
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
    let {  videos, loading } = this.state
    console.log(videos, 'watched')

    return(
    <div>
        {(loading)?
          <span>loading...</span>:
          null
        }
      {(videos)?
        videos.map(
          function(video, index) {

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

    </div>

  )
}
}
