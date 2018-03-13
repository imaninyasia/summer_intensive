import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx';
import './StudentDash.css'
import Unwatchedvideo from '../../Components/UnwatchedVideo/UnwatchedVideo.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import SideNav from './SideNav.jsx'
import {Button} from 'react-bootstrap'
import ProfileBadges from './Badges/Badges.jsx'
import {connect} from 'react-redux'
import Img from '../../../assets/classroom1.png'
class StudentDash extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props},
      adminStudent: null,
      unwatched: 0,
      loading: false,
      user: [],
      showModal: false,
      progress: "http://www.pngmart.com/files/4/Circle-PNG-Transparent-Image.png",
      showingVids: [],
      open: false,
      clicked: 0,
      final: false

    }
    this.changeImg = this.changeImg.bind(this)
    this.openM = this.openM.bind(this)
    this.closeM = this.closeM.bind(this)
    this.showVids = this.showVids.bind(this)

  }

changeImg(){
console.log('clicked will change img')
}
showVids(part_videos){
  let user=""
  this.setState({showingVids: part_videos})
if (this.props.user.admin==true){
   user=this.state.adminStudent
}else if (this.props.user.admin==false){
   user = localStorage.getItem('ind')
}
    fetch(`/videos/viewed/${user}/${part_videos}`)
    .then(response => response.json())
    .then(json => json)
    .then(showingVids =>
      this.setState({
      showingVids
    })
      )
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
shouldComponentUpdate(props, state){

if (this.state.final==true){
  this.forceUpdate()
  return false
}
  if (this.props.admin==true && this.props.student_id){
  let user = this.state.adminStudent
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
    .then(unwatched =>
      this.setState({
      unwatched,
      final: true
    })
      ).catch(error=> console.log(error))
  this.forceUpdate()
  return true
  }

return true
}


componentWillMount(){
let user
if (this.props.user.admin==true){
  fetch("/student/admin/"+this.props.student_id)
  .then(r=> r.json())
  .then(json=> json)
  .then(it=> this.setState({adminStudent: it}))
user=this.state.adminStudent

} else if(this.props.user.admin==false){
  user=localStorage.getItem('ind')
}
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
    .then(unwatched =>
      this.setState({
      unwatched
    })
      )
    }

  render(){
    let { admin, unwatched, user, progress } = this.state
    console.log("img is********", Img)
    const classes = this.state.open ? 'show_vids' : 'vids hide'
    const tooltip = (
  <Tooltip id="tooltip"><strong>Click to change: </strong> profile image</Tooltip> )

  const background = Img
  const trial ="https://upload.wikimedia.org/wikipedia/commons/4/4e/Macaca_nigra_self-portrait_large.jpg"
    return(
     <div id="hi"style={{marginTop: '-30px',height:'89.57vh',backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>

     <SideNav
    user={user}
    badgeAdmin={this.props.admin}
    badgeAdminStudent={this.state.adminStudent}
    badgeTrial={this.showVids} />

      <section style={{zIndex:'0', height: '430px', paddingTop: '0px', paddingBottom: '0px'}} className="content-block">
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
                            admin={this.state.adminStudent}
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
{(this.state.showingVids.length) ?
<section  id={classes} className="content-block gallery-2" style={{paddingTop:'0px', zIndex:'-1'}}>

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
function mapStateToProps(state){
  return {auth: state.auth.isAuthenticated, user:state.auth.user}
}
export default connect(mapStateToProps)(StudentDash)
