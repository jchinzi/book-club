/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

// State

let initialState = {

  currentQuestion:{

    "id": 574,
    "title": "literature",
    "clues_count": 140,
    "clues": [
      {
        "id": 3966,
        "answer": "a short story",
        "question": "Since 1918, the \"O. Henry Awards\" have been given to outstanding examples of this form",
        "value": 100,
        "airdate": "1988-01-12T12:00:00.000Z",
        "category_id": 574,
        "game_id": null,
        "invalid_count": null
      }],
  }

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

export const loadQuestion = () => {
  return async function(dispatch){
    let response = await axios.get('http://jservice.io/api/category?id=574')
    // console.log('Response Data', response.data);
    
    dispatch ({
      type: 'LOAD',
      payload: response.data,
    })
  }
}

