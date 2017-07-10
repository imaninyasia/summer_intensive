import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx';
import Unwatchedvideo from '../../Components/UnwatchedVideo/UnwatchedVideo.jsx'
import VideoList from '../../Components/VideoList/VideoList.jsx'
export default class StudentDash extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props},
      unwatched: 0,
      loading: false
    }

  }

onLoad(data){
    console.log(data.duration)
}
componentWillMount(){
   this.setState({loading: true})
    let user = localStorage.getItem('ind')
    console.log(user, "user local storage")
    fetch(`/videos/non/${user}`)
    .then(response => response.json())
    .then(json => json)
    .then(unwatched =>(
      console.log(unwatched, 'unwatched'),
      this.setState({
      unwatched,
      loading: false
    })
      ))
     this.setState({loading: true})
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
      // this.setState({
      //   admin: data.admin
      // })
      // )
    ))
    }

  render(){
    let { admin, unwatched } = this.state
    console.log(unwatched, 'here')
    return(
     <div>
      <section className="content-block">
      <div className="container">

      <ul className="nav nav-tabs text-center" role="tablist" id="myTab">
          <li className="active"><a href="#tab1" role="tab" data-toggle="tab">Next Video</a></li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade active in" id="tab1">
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
                            onLoad={this.onLoad}
                            video_num= {unwatched.vimeo_id} />  }


          </div>
        </div>
      </div>

      </div>
  </section>
    <section className="content-block gallery-2">

      <div className="container">

        <div className="underlined-title">
          <div className="editContent">
              <h1>Your Viewed Videos</h1>
          </div>
          <hr />
          <div className="editContent" spellCheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true"  data-placeholder="Type your text">
            <h2>Hand-picked just for you</h2>
          </div>
        </div>

      <div className="row">

      <VideoList history={this.props}/>

      </div>

        </div>


    </section>
</div>
      )
  }
}
