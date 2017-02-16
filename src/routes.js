import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Trainer from './containers/Trainer'
import TrainingNew from './containers/TrainingNew'
import Welcome from './containers/Welcome'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Welcome} />
    <Route path='/trainig/new' component={TrainingNew} />
    <Route path='/:mode/:level' component={Trainer} />
  </Router>
)
