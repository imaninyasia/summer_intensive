import React, { Component } from 'react';
import Video from '../Video/Video.jsx';
import fetch from 'isomorphic-fetch';

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
    .then(unwatched =>
      this.setState({
      unwatched,
      loading: false
    })
      )
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
    return(
    <div>



    <h1>Student Video List</h1>
        {(loading)?
          <span>loading...</span>:
          <span style={{display: 'block'}}>{videos} videos</span>
        }
      {(videos)?
        videos.map(
          function(video, index) {

            if(video.watched==true){
              return(
            <Video  key={video.video_id}
                    video_id={video.video_id}
                    className="youtube-frame"
                    src={video.source}
                    watched={video.watched}
                    course={false}/>
                    )}
                    else if (video.watched==false){
                      return(
                        null
                    )
                     }
                     }):
              <span> Currently 0 Videos </span>
                }
      {(unwatched)? <Video  key={unwatched.video_id}
                            video_id= {unwatched.video_id}
                            className="unwatched"
                            src={unwatched.source}
                            watched={unwatched.watched}
                            course={false}
                            onLoad={this.onLoad}/> : <span>error loading new quiz video</span> }

    </div>

  )
}
}
