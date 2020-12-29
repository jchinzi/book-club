import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers

import triviaQuestions from './triviaReducer';
import members from './nextReducer';

let reducers = combineReducers({
  triviaQuestions,
  members
});

// End of Reducers

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();