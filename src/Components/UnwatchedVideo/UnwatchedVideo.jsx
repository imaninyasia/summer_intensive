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
      jpeg: null
    }
  }
componentWillMount(){
  if (this.state.jpeg==null || prevProps != this.props){
     fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.json`)
  .then(res=> res.json())
  .then(json=>json)
  .then(data=>
      this.setState({jpeg: data[0].thumbnail_large})
    )
  }
}
  render(){
    const {className, src, allowFullScreen, watched, video_id, course, video_num} = this.props
    return(

    <div className={className}>
  <div className="col-md-5 col-md-offset-1 col-sm-6">

            {(this.state.jpeg)? <img className="vimeo_vid"style={{borderRadius: '0px'}} src={this.state.jpeg} /> : null}
            </div>
            <div className="col-md-5 col-sm-6" style={{marginLeft: '7%', marginTop: '8%'}}>
              <div className="editContent" style={{outline: 'none', cursor: 'inherit'}}>
                <h3>Video content chapter</h3>
              </div>
              <div className="editContent" style={{fontSize: '40px',outline: 'none', cursor: 'inherit', leftMargin: '10%'}}>
                {((this.props.admin && watched==false && course==true) ||(watched==true)||(this.props.admin))? null :
        <Link to={`/courses/${video_id}`}>Quiz</Link> }
              </div>
            </div>

          </div>

    )
  }
}


