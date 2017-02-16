import {
  FETCH_TRAINIG,
  FETCH_TRAINIG_SUCCESS,
  FETCH_TRAINIG_FAILED
} from '../constants'

export const initialState = {
  isFetching: false
}

export function trainerReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_TRAINIG:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TRAINIG_FAILED:
      return {
        ...state,
        isFetching: false
      }
    case FETCH_TRAINIG_SUCCESS:
      return {
        currentTraining: action.payload.trainig.id,
        currentLesson: action.payload.trainig.lessons[0],
        isFetching: false
      }
    default:
      return state
  }
}

export default trainerReducer
