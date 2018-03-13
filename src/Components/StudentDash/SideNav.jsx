import React, { Component } from 'react';
import './StudentDash.css'
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap'
import $ from 'jquery'
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import ProfileBadges from './Badges/Badges.jsx'
import {connect} from 'react-redux'
import msnry from 'masonry-layout'
import './SideNav.css'
import Dorm from '../../../assets/map-dorm-temp.png'
import Library from '../../../assets/map-library-temp.png'
import Hallway from '../../../assets/map-hallway-temp.png'
import Gym from '../../../assets/map-gym-temp.png'
import ClassRoom from '../../../assets/classroomButton-on.png'
import Staircase from '../../../assets/map-gym-temp.png'
class SideNav extends Component{


constructor(props){
  super(props);
  this.state={
    showModal: false,
    currentRoom: null
  }
  this.masonry = this.masonry.bind(this)
}
openNav(){
document.getElementById("mySidenav").style.width = "620px"
}
componentDidMount(){
this.masonry()
}
masonry(){
let grid = document.getElementByClassName("grid")
var $grid = new msnry( grid, {
  itemSelector:
    '.grid-item',
  columnWidth: 70
});

$grid.on( 'click', '.grid-item', function() {
  console.log('clicked')
  $grid.masonry();
});
}
closeNav(){
document.getElementById("mySidenav").style.width = "0px"
}
mouseOver(){
this.openNav()
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
render(){
const tooltip = (
  <Tooltip id="tooltip"><strong>Click to change: </strong> profile image</Tooltip> )

  return(
    <div >
    <Modal show={this.state.showModal} onHide={this.closeM.bind(this)}>
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
            <Button onClick={this.closeM.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>

    <div id="edge" onMouseOver={this.openNav.bind(this)} style={{display: 'inline-block', position: 'fixed', height: '100vh', width:'20px'}}><span style={{fontSize: '30px', cursor:'pointer'}} >&#9776;</span></div>
    <div id="mySidenav" style={{ backgroundColor: 'darkgrey', opacity:'0.95'}} className="sidenav">
      <a style={{paddingTop:'90px'}}href={void(0)} className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
      <OverlayTrigger placement="top" overlay={tooltip}>

      <img src={this.props.user.profile_img} className="student_dash_thumb" alt="Profile Picture" style={{outline: 'none', cursor: 'inherit', cursor: 'pointer'}} onClick={this.openM.bind(this)}/>
      </OverlayTrigger>
<p id="email">{this.props.user.email}</p>

<div className="grid">
  <div style={{backgroundImage: `url(${Library})`, backgroundSize: 'cover'}}className="grid-item dorm">library</div>
  <div style={{backgroundImage: `url(${Hallway})`, backgroundSize: 'cover'}} className="grid-item hallway">hallway</div>
  <div style={{backgroundImage: `url(${Gym})`, backgroundSize: 'cover'}} className="grid-item   gym">gym</div>
  <div style={{backgroundImage: `url(${Dorm})`, backgroundSize: 'cover'}} className="grid-item dormitory">dormitory</div>

  <div style={{backgroundImage: `url(${ClassRoom})`, backgroundSize: 'cover'}} className="grid-item classroom">classroom</div>
  <div style={{backgroundImage: `url(${Staircase})`, backgroundSize: 'cover'}} className="grid-item staircase"><span>staircase</span></div>
</div>

       <ProfileBadges
   admin={this.props.badgeAdmin}
   adminStudent={this.props.badgeAdminStudent}
   trial={this.props.badgeTrial}/>

      <a href="#">About</a>
        </div>
    </div>
    )
}
}
export default SideNav
