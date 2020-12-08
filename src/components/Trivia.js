import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

// Import Reducer

import { loadQuestion } from '../store/triviaReducer';


function Trivia(props) {

  useEffect(() => {
    props.loadQuestion();
    // eslint-disable-next-line
  },[])

  
  const [inGame, setInGame] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thisQuestion, setQuestion] = useState('');
  const [thisAnswer, setAnswer] = useState('');
  const [indexesSeen, setIndexesSeen] = useState([])

  useEffect(() => {
    setQuestion(props.clueObject[currentIndex].question);
    setAnswer(props.clueObject[currentIndex].answer);
    // eslint-disable-next-line
  },[currentIndex])
  
  const triviaGuess = React.useRef(null);
  
  function newIndex(){
    let maxLength = props.clueCount;

    let index = Math.round(Math.random()*maxLength);
    if(indexesSeen.length === (maxLength-1)){
      setIndexesSeen([]);
    }
    while(indexesSeen.includes(index)){
      index = Math.round(Math.random()*maxLength);
    }
    indexesSeen.push(index);
    console.log(indexesSeen);
    setCurrentIndex(indexesSeen[indexesSeen.length-1]);
  } 
  
  function beginGame(){
    newIndex();
    setQuestion(props.clueObject[currentIndex].question);
    setAnswer(props.clueObject[currentIndex].answer);
    // thisScore = props.clueObject[currentIndex].value;
    // thisID = props.clueObject[currentIndex].id;
    setInGame(true);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`You guessed ${triviaGuess.current.value}.  The correct answer is ${thisAnswer}`);
    newIndex();
  }
  
  
  
  if(inGame){
    
    return(
      <>
    <div>
      Lit Based Trivia!
      <br />
    </div>
    <form onSubmit={handleSubmit}>
      <p>
        Question: {thisQuestion}
      </p>
      <label>
        Answer:
        <input type="text" ref={triviaGuess} />
        <input type="submit" value="Final Answer" />
      </label>
    </form>
    <p>This Questions Index: {currentIndex}</p>
    <p>Asked So Far: {indexesSeen}</p>

    </>
  )
}
return(
  <button onClick={() => beginGame()}>
    Bring on the Trivia!
  </button>
)
}

const mapStateToProps = state => {
  return {
    clueObject: state.triviaQuestions.currentQuestion.clues,
    clueCount: state.triviaQuestions.currentQuestion.clues_count,     
  }
}

const mapDispatchToProps = {
  loadQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);