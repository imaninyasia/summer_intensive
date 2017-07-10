import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Useranswer from '../../Answer/Answer.jsx';
import '../UserList.css'
export default class UserAnswersList extends Component {

    constructor(props){
    super(props)
    this.state= {
      answers: [],
      loading: false,
    }
  }

  componentDidMount(){
    let user = this.props.user
    fetch('/admin/answers'+"/"+user)
    .then(response => response.json())
    .then(json => json)
    .then(answers =>
      this.setState({
      answers,
      loading: false
    }))
  }

render() {
        const {answers, loading} = this.state
        const { user }= this.props
        console.log(user)
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
                      user={answer.username}
                      answer={answer.answer}
                      question={answer.question}
                      ques_num= {answer.question_id}
                      />
                      ):
                    <span> This user hasn't answered any questions </span>
                }
            </div>
        )
   }

}
