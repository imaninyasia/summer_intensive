import React, { Component } from 'react';
import Video from '../Video/Video.jsx';
import fetch from 'isomorphic-fetch';
import './VideoList.css'
import UnwatchedVideo from '../UnwatchedVideo/UnwatchedVideo.jsx'
export default class VideoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      unwatched: [],
      loading: false,
      viewable: false
    }

  }
onLoad(data){
    console.log(data.duration)
}
componentDidMount(){
  console.log('showing these', this.props.showVids)
}
  //  componentWillMount() {
  //       let user = localStorage.getItem('ind')
  //    this.setState({loading: true})
  //   fetch(`/videos/viewed/${user}/${this.props.showVids}`)
  //   .then(response => response.json())
  //   .then(json => json)
  //   .then(videos =>
  //     this.setState({
  //     videos,
  //     loading: false
  //   })
  //     )
  // }


  render(){
    let {  videos, loading, viewable } = this.state
    let {showVids} = this.props
    return(
    <div>
        {(loading)?
          <span>loading...</span>:
          null
        }
      {(showVids)?
        showVids.map(
          function(video, index) {
            return(
            <Video  key={index}
                    video_id={video.video_id}
                    className="youtube-frame"
                    src={video.source}
                    watched={video.watched}
                    course={false}
                    video_num={video.vimeo_id}
                    viewable={viewable}/>
                    )
                     }):
              <span> Currently 0 Videos </span>
                }

    </div>

  )
}
}
