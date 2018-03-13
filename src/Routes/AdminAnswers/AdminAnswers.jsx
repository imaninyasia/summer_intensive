import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import StudentDash from '../../Components/StudentDash/StudentDash.jsx'
import UserAnswersList from '../../Components/UserList/UserAnswersList/UserAnswersList.jsx';
import './AdminAnswers.css'
export default class AdminAnswers extends Component {

  constructor(props){
    super(props);
    this.state={
      student: this.props.match.params.student_id,
      assessment: null,
      url: null
    }

    this.submit = this.submit.bind(this)
    this.change = this.change.bind(this)
    this.assess = this.assess.bind(this)
  }
change(e){
  this.setState({assessment: e.target.value})
}
assess(e){
  this.setState({url: e.target.value})
}
submit(e){
  e.preventDefault()
  console.log('submitting form for assessment')
  console.log(this.state.student)
  fetch(`/admin/assessment/${this.state.student}`, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      assessment: this.state.assessment,
      url: this.state.url
      })
  })

}

  render(){
    return(
      <div>
      <form className="AssessmentForm"onSubmit={this.submit}>
<label>Assessment's corresponding course</label>
  <select onChange={this.change}name="assessment">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
  </select>
  <br />
  <input placeholder="Assessment URL" className="putAssess"onChange={this.assess}type="text" />
  <button className="btn btn-primary" type="submit"> Upload </button>
</form>
      <StudentDash admin={true}
      student_id={this.state.student}/>


      </div>
      )
  }

}
