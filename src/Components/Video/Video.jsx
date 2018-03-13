import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuizList from '../QuizList/QuizList.jsx'
import './Video.css'
import Vimeo from 'react-vimeo';
import fetch from 'isomorphic-fetch';
import Player from '@vimeo/player';
import {Modal} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export default class Video extends Component{
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      duration: 0,
      currentTime: 0,
      courseVal: false,
      jpeg: null,
      inner: 0,
      showModal: false
    }
    this.play = this.play.bind(this)
    this.end = this.end.bind(this)
    this.iframeStuff = this.iframeStuff.bind(this)
    this.closeM = this.closeM.bind(this)
    this.openM = this.openM.bind(this)
  }
  play(){
         let user = localStorage.getItem('ind')
         let vid = this.props.video_id
          fetch(`/badges/update/${vid}/${user}`,{
            method: 'POST',
            headers:{
              'content-type': 'application/json',
            }
            })
  }
  end(){
    console.log('endedddd')
    let vid_id = this.props.video_id
    let user = localStorage.getItem('ind')
     fetch('/videos/update/'+vid_id, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        watched: true,
        user: user
      })
    })
fetch(`/badges/updatec/${vid_id}/${user}`,{
  method: 'POST',
  headers:{
    'content-type': 'application/json',
  }
})
  }
iframeStuff(){
  // on time update on condition add to this.state.inner variable
  // if variable >0 don't pause
  // on pause modal display value setState=true
  // on quiz.submit => video.play
  // ***make sure video doesn't pause more than once***
let there =this
var iframe = document.querySelector('iframe');
  let counter = 0
    var player = new Player(iframe);
     player.on('play', this.play);
     player.on('ended', this.end);
     player.on('timeupdate', function(e) {
        console.log(e)

        let trial = Math.floor(e.seconds)
        if (trial==4){
          if (counter==0){
            counter++
          player.pause().then(function() {
            console.log(counter)
            console.log(this)
            there.openM()

            }).catch(function(error) {
              console.log(error)
            });
            }else{``
              console.log('counter nppp', counter)
            }
        }
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
}

componentDidUpdate(prevProps, prevState) {

  if (this.props.course==true && prevProps != this.props){
  this.iframeStuff()
}
if (this.state.jpeg==null || prevProps != this.props){
     fetch(`http://vimeo.com/api/v2/video/${this.props.video_num}.json`)
  .then(res=> res.json())
  .then(json=>json)
  .then(data=>
      this.setState({jpeg: data[0].thumbnail_large})
    )
  }

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
    const {className, src, allowFullScreen, watched, video_id, course, video_num, course_val, part_val} = this.props
    return(
    <div className={className} >
      {(course==true) ?
        <div>
            <Modal show={this.state.showModal} onHide={this.closeM}>
          <Modal.Header >
            <Modal.Title style={{textAlign: 'center'}}>Title Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>

              PLACE QUIZ HERE + FORMAT
      </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeM}>Close</Button>
          </Modal.Footer>
        </Modal>
        {(src!=null)?<iframe frameBorder="0" className="vimeo_vid_course" src={src}> </iframe> : null }

        </div>
            :
      <div className="grid col-md-4 col-sm-6 col-xs-12">
          <figure className="effect-lily">
          {(this.state.jpeg)? <img style={{borderRadius: '0px'}} src={this.state.jpeg} /> : null}




            <figcaption>
              <div className="editContent" style={{outline: 'none', textShadow:'1px 1px #000000',  cursor: 'inherit'}}>
                <h2>Item <strong>{video_id}</strong></h2>
              </div>
              <div className="editContent" style={{outline: 'none', textShadow:'1px 1px #000000', cursor: 'inherit'}}>
                <p>Beautifully subtle animated hover effect for your gallery</p>
              </div>
              {((watched==false && course==true) ||(watched==true))? null : <Link to={`/courses/${video_id}`}>Quiz</Link>}
              <Link to={`/video/${video_id}`}></Link>
            </figcaption>
          </figure>
        </div>
      }
    </div>
    )
  }
}


