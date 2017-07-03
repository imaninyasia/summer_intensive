import React, { Component } from 'react';
import VideoList from '../../Components/VideoList/VideoList.jsx'
import Video from '../../Components/Video/Video.jsx'
import fetch from 'isomorphic-fetch'
import QuizList from '../../Components/QuizList/QuizList.jsx'
export default class Interactive_Zone extends Component{
  constructor(props){
    super(props);
    this.state = {
      history: {props},
      vid: [],
      loading: false,
      sr: [],
      wa: []
    }
    this.logoutnow = this.logoutnow.bind(this)
  }

 logoutnow() {
      localStorage.removeItem('userName');
      localStorage.removeItem('token');
      console.log('logged out')
      this.props.history.push('/')
  }
     componentWillMount() {
      let video_id = this.props.match.params.video_id
      video_id.toString()
    this.setState({loading: true})
    fetch('/videos/ind/'+video_id)
    .then(response => response.json())
    .then(json => json)
    .then(video =>(
      this.setState({
      vid: video.video_id,
      sr: video.source,
      wa: video.watched,
      loading: false
    })
      ))
  }
  render(){
    const {loading} = this.props
    const {vid, sr, wa} = this.state
    return(
      <div>
        <h1>Course {vid} Video</h1>
        {(loading)?<span>loading...</span>: null }
        {(vid)?
            <div>
            <Video
                    key={1}
                    video_id={vid}
                    className="youtube-frame"
                    src={sr}
                    watched={wa}
                    course={true} />

                    <QuizList
                    video_id={this.props.match.params.video_id}/>
            </div>
                    :
              <span> Currently {video} Videos </span>
                }
        <button onClick={this.logoutnow}>logout</button>

      </div>
      )
  }
}
