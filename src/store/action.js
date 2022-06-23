import * as actions from './actionTypes'

export const addAnswer = (value) => (
  {
    type: actions.ADD_ANSWER,
    payload: value
  });
