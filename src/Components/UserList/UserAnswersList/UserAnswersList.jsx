import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Useranswer from '../../Answer/Answer.jsx';
import '../UserList.css'
export default class UserAnswersList extends Component {

    constructor(props){
    super(props)
    this.state= {
      answers: null,
      loading: false
    }
  }

  componentDidMount(){

  }
  componentDidUpdate(){
    let user = this.props.user
    let video = this.props.video
    if (this.state.answers!=null){
    }else{
      fetch(`/admin/answers/${user}/${video}`)
    .then(response => response.json())
    .then(json => json)
    .then(answers =>
      this.setState({
      answers,
      loading: false
    }))
    }

  }

render() {
        const {answers, loading} = this.state
        const { user }= this.props
        return (
            <div className="answers-list">

                {(answers)?
                  answers.map(
                    (answer, index) =>
                <Useranswer
                      key={index}
                      user={answer.username}
                      answer={answer.answer}
                      question={answer.question}
                      ques_num= {answer.question_id}
                      answer_long={answer.answer_long}
                      answer_short={answer.answer_short}

                      />

                      ):
                     null
                }
            </div>
        )
   }

}
