import { combineReducers } from 'redux'

import globalError from './globalError'
import globalNotice from './globalNotice'
import trainingForm from './trainingForm'

const ui = combineReducers({
  globalError,
  globalNotice,
  trainingForm
})

export default ui
