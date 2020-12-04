import axios from 'axios';

// State

let initialState = {

  currentQuestion: [],

}

// End of State

export default ( state = initialState, action ) => {

  let { type, payload } = action;

  switch(type) {

    case 'LOAD':
      return {...state, currentQuestion:payload}

    default:
      return state
  }
}

export const loadQuestions = () => {
  return async function(dispatch){
    let response = await axios.get('http://jservice.io/api/category?id=574')
    console.log('Response Data', response.data.clues[0]);
    let random = Math.round(Math.random()*140);
    dispatch ({
      type: 'LOAD',
      payload: response.data.clues[random],
    })
  }
}