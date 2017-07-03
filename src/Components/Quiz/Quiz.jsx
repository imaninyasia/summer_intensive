import React, { PropTypes, Component } from 'react';

export default class Quiz extends Component{
 constructor(props){
    super(props)
    this.state= {
      selectedOption: ""
    }
    this.submit = this.submit.bind(this)
    this.handle = this.handle.bind(this)
  }
  submit(e){
    e.preventDefault()
    console.log(e.target.value)
    console.log(this.state.selectedOption)
    let video_id = this.props.video_id
    let q_id = this.props.question_id
    this.setState({loading: true})
    fetch("/questions/post_q"+q_id+user_id+user_answer)
    .then(response => response.json())
    .then(json => json)
    .then(questions =>
      this.setState({
      questions,
      loading: false
    })
      )
    console.log('You have selected:', this.state.selectedOption)
  }
  handleOptionChange(e) {
    console.log(e.target.value)
  this.setState({
    selectedOption: e.target.value
  });
}
handleFormSubmut
handle(e){
  console.log(e.target.value)
}
  render(){
      const {question, ans_short, question_id, video_id, choice1, choice2, choice3 } = this.props
    return(
      <div>
        <form onClick={this.handle} onSubmit={this.submit}>
          <label>
           {question}
           </label>
           {(ans_short == null)? <div>
                                <input type="text" name={question_id} />
                                    </div>
                                    :
                                    <div>
            <input type="radio" name={question_id} value={choice1} /> {choice1}<br />
            <input type="radio" name={question_id} value={choice2} /> {choice2}<br />
            <input type="radio" name={question_id} value={choice3} /> {choice3}<br />
          </div>
                                  }

            <input type="submit" value="Submit" />
          </form>

      </div>
      )
  }

}
