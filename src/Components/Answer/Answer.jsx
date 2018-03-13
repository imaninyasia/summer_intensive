import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import User from '../User/User.jsx';
import './Answer.css'

export default class Answer extends Component {

  constructor(props){
    super(props)

  }


  render(){
    const {user, answer, question, ques_num, answer_long, answer_short} = this.props
    const correct = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Approve.svg/256px-Approve.svg.png"
    return(
    <div>
    {answer_short?
      <div>
  <div className="row">

        <div className="col-lg-8 col-md-7 col-sm-12">
          <div className="editContent">

          </div>
          <h2 style={{display: 'inline-block'}}>{ques_num} {question}</h2>
          {(answer==answer_short)?<img style={{display: 'inline-block', height:'30px'}}src={correct} /> :
    <div>
  <h3>Answer: {answer} </h3>
    <h3>UserAnswer: {answer_short}</h3>
    </div>}
          <div className="editContent" style={{outline: 'rgba(233, 94, 94, 0.5) solid 2px', outlineOffset: '-2px', cursor: 'pointer', fontSize: '21px'}} data-medium-editor-element="true" role="textbox" aria-multiline="true" data-placeholder="Type your text" data-medium-focused="true">
            <p stlye={{fontSize:'21px'}}>{answer}</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-5 col-sm-12">

        </div>

      </div>
    </div> : <section id="basic-1-17" className="basic-1-17 content-block">
    <div className="container">

        <div style={{paddingBottom:'0px'}}className="underlined-title">
          <div className="editContent">
              <h1>{question}</h1>
          </div>
          <hr />
          <div className="editContent">
          </div>
        </div>

      <div className="row">

        <div className="col-sm-6">
          <div className="editContent">
            <h2>Student Response</h2>
          </div>
          <div className="editContent">
            <p>{answer}</p>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="editContent">
            <h2>Admin Comment</h2>
          </div>
          <div className="editContent">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa ex, suscipit id ligula at, luctus tempus dolor. Etiam sodales posuere ligula, eu aliquet nunc commodo vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
    }

    </div>
    )
  }

}
