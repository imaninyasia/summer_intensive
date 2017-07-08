import React, { PropTypes, Component } from 'react';
import Quiz from '../Quiz/Quiz.jsx';
import { Link } from 'react-router-dom';
export default class QuizList extends Component{
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      loading: false
    }
  }
componentDidMount() {
  let video_id = this.props.video_id
  video_id.toString()
    this.setState({loading: true})
    fetch("/questions/"+video_id)
    .then(response => response.json())
    .then(json => json)
    .then(questions =>
      this.setState({
      questions,
      loading: false
    })
      )
}


  render(){
    let { questions, loading } = this.state
    let {video_id} = this.props
    return(
      <div>
      {(loading)?
          <span>loading...</span>:
          <span>{questions.length} questions</span>
        }
      {(questions.length)?
                  questions.map(
                    (question, index) =>
                <Quiz key={question.question_id}
                      question_id={question.question_id}
                      question={question.question}
                      video_id={question.video_id}
                      choice1={question.choice_1}
                      choice2={question.choice_2}
                      choice3={question.choice_3}
                      ans_short = {question.answer_short}/>
                      ):
                    <span> Currently 0 questions </span>
                }

      </div>
      )

  }
}
