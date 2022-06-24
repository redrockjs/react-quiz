import * as actions from './actionTypes'

export const addAnswerAC = (value) => (
  {
    type: actions.ADD_ANSWER,
    payload: value
  });

export const clearAnswersAC = () => (
  {
    type: actions.CLEAR_ANSWERS,
    payload: null
  });
