import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from '../User/User.jsx';

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
    fetch('https://api.randomuser.me/?nat=us&results=12')
    .then(response => response.json())
    .then(json => json.results)
    .then(users => this.setState({
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
                    (user, i) =>
                <User Key={i}
                      name={user.name.first}
                      email={user.email}
                      thumbnail={user.picture.thumbnail}/>
                      ):
                    <span> Currently 0 Members </span>
                }
            </div>
        )
   }

}
