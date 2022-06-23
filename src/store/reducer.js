import * as actions from './actionTypes';

const defaultState = {
  answers: []
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
