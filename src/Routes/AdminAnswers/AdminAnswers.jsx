import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import UserAnswersList from '../../Components/UserList/UserAnswersList/UserAnswersList.jsx';
export default class AdminAnswers extends Component {

  constructor(props){
    super(props);
    this.state={
      student: this.props.match.params.student_id
    }
  }

  render(){
    return(
      <div>
      <h1> User </h1>
      <section id="basic-1-6" className="basic-1-6 content-block">
    <div className="container">
        <div className="underlined-title">
          <div className="editContent">
              <h1>Short Answers</h1>
          </div>
          <hr />
          <div className="editContent">
          </div>
        </div>
      <div className="row">

        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="editContent">
            <h2>Question One</h2>
          </div>
          <div className="editContent" style={{outline: 'rgba(233, 94, 94, 0.5) solid 2px', outlineOffset: '-2px', cursor: 'pointer'}} data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="Type your text" data-medium-focused="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12">

        </div>

      </div>
        <div className="row">

        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="editContent">
            <h2>Question Two</h2>
          </div>
          <div className="editContent" style={{outline: 'rgba(233, 94, 94, 0.5) solid 2px', outlineOffset: '-2px', cursor: 'pointer'}} contenteditable="true" spellcheck="true" data-medium-editor-element="true" role="textbox" aria-multiline="true" medium-editor-index="0" data-placeholder="Type your text" data-medium-focused="true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12">

        </div>

      </div>
    </div>
  </section>
  <section id="basic-1-17" className="basic-1-17 content-block">
    <div className="container">

        <div className="underlined-title">
          <div className="editContent">
              <h1>Long Answers</h1>
          </div>
          <hr />
          <div className="editContent">
          </div>
        </div>

      <div className="row">

        <div className="col-sm-6">
          <div className="editContent">
            <h2>Column One</h2>
          </div>
          <div className="editContent">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="editContent">
            <h2>Column Two</h2>
          </div>
          <div className="editContent">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
      <UserAnswersList user={this.state.student}/>
      <label>User Assesment</label>
      <input type="text" ref='user_assesment' />
      </div>
      )
  }

}
