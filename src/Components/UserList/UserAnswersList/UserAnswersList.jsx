import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Useranswer from '../../Answer/Answer.jsx';
import '../UserList.css'
export default class UserAnswersList extends Component {

    constructor(props){
    super(props)
    this.state= {
      answers: [],
      loading: false
    }
  }

render() {
        const {answers, loading} = this.state
        return (
            <div className="answers-list">
                {(loading)?
                  <span>loading...</span>:
                  <span>{answers.length} answers</span>
                }
                {(answers.length)?
                  answers.map(
                    (answer, index) =>
                <Useranswer
                      Key={index}
                      user={answer.user_id}
                      answer={answer.answer}
                      question={answer.question_id}/>
                      ):
                    <span> This user hasn't answered any questions </span>
                }
            </div>
        )
   }

}
