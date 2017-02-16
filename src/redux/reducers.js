import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import ui from './ui'
import entitites from './entitites'

const rootReducer = combineReducers({
  routing,
  ui,
  entitites
})

export default rootReducer
