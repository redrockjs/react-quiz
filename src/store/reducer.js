import * as actions from './actionTypes';
import datafile from "../asssets/data/data.json";

const defaultState = {
  answers: [],
  data:datafile
}

const rootReducer = (state = defaultState, action) => {

  switch (action.type) {

    case actions.ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      }

    default:
      return state
  }
}

export default rootReducer;
