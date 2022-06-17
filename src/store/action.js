import * as actions from './actionTypes'

export const addAnswer = (value) => (
  {
    type: actions.ANSWER_ADD,
    payload: value
  });
