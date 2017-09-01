import {Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './Dashboard/Dashboard.jsx';
import Interactive_Zone from './Interactive_Zone/Interactive_Zone.jsx'
import Landing from './Landing/Landing.jsx'
import Whoops from '../Components/404/Whoops404.jsx'
import Answers from './AdminAnswers/AdminAnswers.jsx'
export default class Main extends Component{

  constructor(props){
    super(props);
  }
  componentDidUpdate(){
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
          <Route path="/dashboard"  component={Dashboard} />
          <Route path="/courses/:video_id" component={Interactive_Zone} />
          <Route path="/student/:student_id" component={Answers} />
          <Route path="*" component={Whoops} />
        </Switch>
      </main>

      )
  }
}
