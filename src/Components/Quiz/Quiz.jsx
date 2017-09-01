import React, { Component } from 'react';
import { PropTypes} from 'prop-types';
export default class Quiz extends Component{
 constructor(props){
    super(props)
    this.state= {
      selectedOption: "",
      loading: false,
      visible: true,
      textCapture: ''
    }
    this.submit = this.submit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.textCapture = this.textCapture.bind(this)
  }
  submit(e){
    e.preventDefault()
    console.log(this.state.selectedOption)
    let video_id = this.props.video_id
    let q_id = this.props.question_id
    let user_answer = this.state.selectedOption
    let username = localStorage.getItem("ind")
    let short_answer = this.state.textCapture
    if (!short_answer){
    this.setState({loading: true,
                    visible: false})
    fetch("/questions/post_q"+"/"+q_id+"/"+username+"/"+user_answer, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        answered: true,
        short_answer: null
      })
    })
    .then(response => response.json())
    .then(json => json)
    .then(returned =>
      console.log(returned)
      )
    console.log('You have selected:', this.state.selectedOption)
  } else if (short_answer){
    this.setState({loading: true,
                    visible: false})
    fetch("/questions/post_q"+"/"+q_id+"/"+username+"/short_answer", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        answered: true,
        short_answer: short_answer
      })
    })
    .then(response => response.json())
    .then(json => json)
    .then(returned =>
      console.log(returned)
      )
  }
  }
  handleOptionChange(e) {
  this.setState({
    selectedOption: e.target.value
  });
}
textCapture(e){
this.setState({textCapture: e.target.value})
console.log(this.state.textCapture)
}
  render(){
      const {question, ans_short, question_id, video_id, choice1, choice2, choice3 } = this.props
      const {class1, class2, class3, class4 } = this.state
    return(
      <div>
      {(this.state.visible==true)?
        <div>
        <form onClick={this.handle} onSubmit={this.submit}>
          <label>
           {question}
           </label>
           {(ans_short == null)? <div>
                                <input ref='short_answer' onChange={this.textCapture} type="text" name={question_id} />
                                    </div>
                                    :
                                    <div>
            <input  type="radio" onChange={this.handleOptionChange} name={question_id} value={choice1} /> {choice1}<br />
            <input type="radio" onChange={this.handleOptionChange} name={question_id} value={choice2} /> {choice2}<br />
            <input type="radio" onChange={this.handleOptionChange} name={question_id} value={choice3} /> {choice3}<br />
          </div>
                                  }

            <input type="submit" value="Submit" />
          </form>

      </div>
      :
      null}
     </div>
      )
  }

}
