import {
  SET_GLOBAL_ERROR,
  RESET_GLOBAL_ERROR
} from '../constants'

function globalError (state = null, action) {
  switch (action.type) {
    case SET_GLOBAL_ERROR:
      return action.payload
    case RESET_GLOBAL_ERROR:
      return null
    default:
      return state
  }
}

export default globalError

