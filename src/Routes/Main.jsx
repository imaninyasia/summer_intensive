import {Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard.jsx';
import Video_Answers from './Video_Answers/Video_Answers.jsx';
import Interactive_Zone from './Interactive_Zone/Interactive_Zone.jsx';
import Landing from './Landing/Landing.jsx';
import Whoops from '../Components/404/Whoops404.jsx';
import Answers from './AdminAnswers/AdminAnswers.jsx';
import requireAuth from '../../utils/requireAuth.js'
export default class Main extends Component{

  constructor(props){
    super(props);
  }
componentWillMount(){
 var token = localStorage.getItem('token')
    fetch('/user/verify', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: token,
      })
    })
    .then(r => r.json())
    .then((data) => {

     })
    }
  render(){
    return(
      <main >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard"  component={requireAuth(Dashboard)} />
          <Route path="/courses/:video_id" component={requireAuth(Interactive_Zone)} />
          <Route path="/student/:student_id"component={requireAuth(Answers)} />
          <Route path="/video/:vid_id" component={requireAuth(Video_Answers)} />
          <Route path="*" component={Whoops} />
        </Switch>
      </main>

      )
  }
}
