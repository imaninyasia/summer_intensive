import React, { Component } from 'react';
import UserList from '../../Components/UserList/UserList.jsx'
import StudentDash from '../../Components/StudentDash/StudentDash.jsx'
export default class Dashboard extends Component{

  constructor(props){
    super(props)
    this.state ={
      admin: false,
      history: {props}
    }

  }


componentWillMount(){
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
  //   window.onbeforeunload = (e) =>{
  //   var token = localStorage.getItem('token')
  //   if(token==null){
  //     fetch('/user/verify', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       token: token,
  //     })
  //   })
  //   .then(r => r.json())
  //   .then((token) => {
  //     localStorage.setItem('token', token)
  //     console.log('the token is being set through verify')
  //     if(localStorage.getItem('token')==localStorage.getItem('token')){
  //   } else {
  //     console.log('error at login')
  //   }
  //   })
  //   } else {
  //     fetch('/user/verify', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       token: token,
  //     })
  //   }).then(data => (console.log(data, "user info dashboard"),

  //     this.setState({
  //       admin: data.admin
  //     })
  //     ))
  //   }
  // }
    const admin = this.state.admin
    return(
     <div>
    {(admin==true || admin==="admin") ?
    <div>

    <section className="content-block gallery-1">

      <div className="container">

        <div className="underlined-title">
          <div className="editContent">
              <h1>Students</h1>
          </div>
          <hr />
          <div className="editContent">
            <h2>Hand-picked just for you</h2>
          </div>
        </div>

        <div className="editContent">
              <ul className="filter"><br /></ul>
        </div>


            <div className="row">
                <div id="isotope-gallery-container">
                    <UserList />

                </div>

            </div>

        </div>

    </section>


    </div> :
                      <StudentDash history={this.props}/>}
</div>
      )
  }
}
