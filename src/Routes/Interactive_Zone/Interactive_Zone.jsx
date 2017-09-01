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
      console.log(video, 'this is what got loaded'),
      this.setState({
      vid: video.video_id,
      sr: video.source,
      wa: video.watched,
      vim: video.vimeo_id,
      loading: false,
      course: video.course,
      part: video.part
    })
      ))
  }
  render(){
    const {loading} = this.props
    const {vid, sr, wa, vim} = this.state
    return(
      <section className="content-block">
      <div className="container">

        <ul className="nav nav-tabs text-center" role="tablist" id="myTab" style={{
    paddingBottom: '0px'
}}>
          <li className="active"><h1 role="tab" data-toggle="tab">Course {vid} Video</h1></li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade in active" id="tab1">
          <div className="row" style={{height: '375px'}}>
            <div className="col-sm-10 col-sm-offset-1" style={{width: '812px', marginLeft: '0px'}}>
              {(loading)?<span>loading...</span>: null }
        {(vid!= undefined)?
            <div>

            <Video

                    video_id={vid}
                    className="youtube-frame"
                    src={sr}
                    watched={wa}
                    course={true}
                    course_val={this.state.course}
                    part_val={this.state.part}
                    video_num={vim} />


            </div>
                    :
              <span> Currently {video} Videos </span>
                }
            </div>
            <div className="col-md-5 col-sm-6" style={{paddingRight: '0px', width: '354px', paddingLeft: '0px', height: '143px'}}>
              <div>
                <h3>Quiz</h3>
              </div>
              <div>
                <p>Quiz questions go here</p>
                <QuizList
                    video_id={this.props.match.params.video_id}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  </section>
      )
  }
}
