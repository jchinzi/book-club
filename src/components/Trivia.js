import React, {useEffect} from 'react';
import { connect } from 'react-redux';

// Import Reducer

import { loadQuestions } from '../store/triviaReducer';


function Trivia(props) {
  
  useEffect(() => {
    props.loadQuestions();
  },[])

  return(
    <>
    <div>
      Lit Based Trivia!
      <br />
      Coming Soon
    </div>
    <ul>
      <li>
        {props.question}
      </li>
    </ul>
    </>
  )
}

const mapStateToProps = state => {
  return {
    question: state.triviaQuestions.currentQuestion.question,
    answer: state.triviaQuestions.currentQuestion.answer,
    score: state.triviaQuestions.currentQuestion.value,
    id: state.triviaQuestions.currentQuestion.id
    
  }
}

const mapDispatchToProps = {
  loadQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);