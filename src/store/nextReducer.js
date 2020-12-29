import axios from 'axios';

// State

let initialState = {
  
  allMembers: [
    {
    "id": 0,
    "first_name": '',
    "last_name": '',
    "eligible": false
  },
]
}

export default ( state = initialState, action ) => {

  let { type, payload } = action;

  switch(type) {

    case 'LOAD':
      return {...state, allMembers:payload}

    default:
      return state

  }
}

export const loadMembers = () => {
  return async function (dispatch) {
    let response = await axios.get('http://localhost:3000/memberTable')
    
    console.log('Response Data', response.data);

    dispatch({
      type: 'LOAD',
      payload: response.data,
    })
  }
}