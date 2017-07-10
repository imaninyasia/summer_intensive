import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from '../User/User.jsx';
import './UserList.css'
export default class UserList extends Component{

  constructor(props){
    super(props)
    this.state= {
      users: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch('/student/')
    .then(response => response.json())
    .then(json => json)
    .then(users =>
      this.setState({
      users,
      loading: false
    }))
  }

   render() {
        const {users, loading} = this.state
        return (
            <div className="user-list">
                <h1> The Students </h1>
                {(loading)?
                  <span>loading...</span>:
                  <span>{users.length} users</span>
                }
                {(users.length)?
                  users.map(
                    (user, index) =>
                <User Key={index}
                      num = {user.user_id}
                      name={user.username}
                      email={user.email}
                      thumbnail={user.profile_img}/>
                      ):
                    <span> Currently 0 Members </span>
                }
            </div>
        )
   }

}
