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
                {(users.length)?
                  users.map(
                    (user, index) =>
                <User key={index}
                      num = {user.user_id}
                      name={user.email}
                      email={user.email}
                      thumbnail={user.profile_img}/>
                      ):
                    <span> Currently 0 Members </span>
                }
            </div>
        )
   }

}
