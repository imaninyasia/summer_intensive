import React, { Component } from 'react';
import App from '../../Components/App/App.jsx';
import { Link } from 'react-router';
import Login from '../../Components/Login/Login.jsx';
import Signup from '../../Components/Signup/Signup.jsx';
export default class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      history: {props}
    }

  }

render(){
    return(
<section id="promo-1" className="content-block promo-1 min-height-600px bg-offwhite">
    <div className="container">

      <div className="row">

        <div className="col-md-5">
          <div className="editContent">
            <h2>Urban Arts Online Learning&nbsp;</h2>
          </div>
          <div className="editContent">
            <p>Suspendisse ac pretium sapien, placerat lacinia enim. Fusce eu elit quis lacus cursus mollis. In feugiat diam id sem consectetur, id accumsan risus venenatis.</p>
          </div>

          <Login next={this.state.history}/>

        </div>

        <div className="col-md-6 col-md-offset-1">

          <div className="video-wrapper">
            <iframe width="560" height="315" src="http://www.youtube.com/embed/vcQDcbChHQA?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>
          </div>

        </div>

      </div>

    </div>
         <Signup next={this.state.history}/>

  </section>







      )
  }

}
