import {
  SET_GLOBAL_NOTICE,
  RESET_GLOBAL_NOTICE
} from '../constants'

function globalNotice (state = null, action) {
  switch (action.type) {
    case SET_GLOBAL_NOTICE:
      return action.payload
    case RESET_GLOBAL_NOTICE:
      return null
    default:
      return state
  }
}

export default globalNotice

