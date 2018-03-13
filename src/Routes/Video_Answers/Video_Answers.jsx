import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Player from '@vimeo/player';
import Vimeo from 'react-vimeo';
import './Video_Answers.css';
import UserAnswersList from '../../Components/UserList/UserAnswersList/UserAnswersList.jsx';
export default class Video_Answers extends Component {

constructor(props){
  super(props)
  this.state={
    admin: null,
    vid: this.props.match.params.vid_id,
    student: localStorage.getItem('ind')
  }
}



componentWillMount(){

  let vid_id = this.state.vid
  fetch(`/videos/ind/${vid_id}`)
  .then(res => res.json())
  .then(json => json)
  .then(vid =>
    this.setState({vid}))
}
render(){
  const {vid, admin, student}= this.state
  return(
    <div>
    <iframe style={{marginTop: '20px'}}src={`https://player.vimeo.com/video/${vid.vimeo_id}`}></iframe>
    <section id="basic-1-6" className="basic-1-6 content-block">
    <div className="container">
        <div className="underlined-title">
          <div className="editContent">
              <h1>Short Answers</h1>
          </div>
          <hr />
          <div className="editContent">
          </div>
        </div>



    </div>
  </section>
    <UserAnswersList
    user={student}
    video={vid.video_id}/>

    </div>
    )

}
}
