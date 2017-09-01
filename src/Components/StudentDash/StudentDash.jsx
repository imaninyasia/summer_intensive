import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx';
import './StudentDash.css'
import Unwatchedvideo from '../../Components/UnwatchedVideo/UnwatchedVideo.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import ProfileBadges from './Badges/Badges.jsx'


export default class StudentDash extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props},
      unwatched: 0,
      loading: false,
      user: [],
      showModal: false,
      progress: "http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png",
      showingVids: [],
      open: false,
      clicked: 0

    }
    this.changeImg = this.changeImg.bind(this)
    this.openM = this.openM.bind(this)
    this.closeM = this.closeM.bind(this)
    this.showVids = this.showVids.bind(this)
    this.changeVids = this.changeVids.bind(this)
  }

changeImg(){
console.log('clicked will change img')
}
showVids(part_videos){
  console.log(part_videos, 'what iz diz')
  this.setState({showingVids: part_videos})
this.setState({ open: !this.state.open })
        let user = localStorage.getItem('ind')
     this.setState({loading: true})
    fetch(`/videos/viewed/${user}/${part_videos}`)
    .then(response => response.json())
    .then(json => json)
    .then(showingVids =>
      this.setState({
      showingVids,
      loading: false
    })
      )
    console.log(this.state.showingVids)
}
changeVids(){
  console.log('changing vids')
}
 getInitialState(){
    return { showModal: false };
  }

  closeM(){
    this.setState({ showModal: false });
  }

  openM(){
    this.setState({ showModal: true });
  }
progressCompleted(){
  this.setState
}

componentWillMount(){
   this.setState({loading: true})
    let user = localStorage.getItem('ind')
    fetch(`/student/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(user =>
      this.setState({
      user,
      thumbnail: user.profile_img
    }))

    fetch(`/videos/non/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(unwatched =>(
      console.log(unwatched, 'unwatched'),
      this.setState({
      unwatched
    })
      ))
    var token = localStorage.getItem('token')
    fetch('/user/verify', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      })
    })
    .then(r => r.json())
    .then(data => (console.log(data, "verify admin"),
      console.log('set admin state here'),
       this.setState({
        admin: data.admin
      })
      // clean this up!
    ))
    this.setState({loading: false})
    }

  render(){
    let { admin, unwatched, user, progress } = this.state
    const classes = this.state.open ? 'show_vids' : 'vids hide'
    const tooltip = (
  <Tooltip id="tooltip"><strong>Click to change: </strong> profile image</Tooltip> )


    return(
     <div>
     <Modal show={this.state.showModal} onHide={this.closeM}>
          <Modal.Header >
            <Modal.Title style={{textAlign: 'center'}}>Upload Profile Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
              <label>File </label>
              <input type='file' />
      </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeM}>Close</Button>
          </Modal.Footer>
        </Modal>
     <div className="student_prof">
     <OverlayTrigger placement="top" overlay={tooltip}>
      <img src={user.profile_img} className="student_dash_thumb" alt="Profile Picture" style={{outline: 'none', cursor: 'inherit', cursor: 'pointer'}} onClick={this.openM}/>
    </OverlayTrigger>
      <p>{user.email}</p>
      </div>
      <section style={{height: '430px', paddingTop: '0px', paddingBottom: '0px'}} className="content-block">
      <div className="container">

      <ul className="nav nav-tabs text-center" role="tablist" id="myTab">
          <li className="active"><a style={{fontSize: '24px'}} href="#tab1" role="tab" data-toggle="tab">Next Video</a></li>
      </ul>

      <div className="tab-content">
        <div style={{padding:0}}className="tab-pane fade active in" id="tab1">
          <div className="row">

            {(unwatched== 0)?
              <div className="col-md-5 col-md-offset-1 col-sm-6">
            <h1>You've completed the course!</h1>
            </div>
                            :
              <Unwatchedvideo

                            video_id= {unwatched.video_id}
                            className=""
                            src={unwatched.source}
                            watched={unwatched.watched}
                            course={false}
                            video_num= {unwatched.vimeo_id} />  }


          </div>
        </div>
      </div>

      </div>
  </section>

  <ProfileBadges
   admin={admin}
   trial={this.showVids}/>



{(this.state.showingVids.length) ?
<section  id={classes} className="content-block gallery-2" style={{paddingTop:'0px'}}>

      <div className="container">

        <div className="underlined-title" style={{paddingBottom:'0px'}}>
          <div className="editContent">
              <h1>Your Viewed Videos</h1>
          </div>
          <hr />

        </div>

      <div className="row">
  <VideoList history={this.props}
                 changeVids = {this.changeVids}
                showVids={this.state.showingVids}/>
                 </div>

        </div>


    </section>
                :
                null}



</div>
      )
  }
}
