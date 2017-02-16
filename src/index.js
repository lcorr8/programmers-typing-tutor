import React from 'react'
import { render } from 'react-dom'
import routes from './routes'

import './index.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
// import 'codemirror/theme/default.css'

import createStore from './redux/createStore'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

/**
 * Create Redux Store
 */
const store = createStore()

/**
 * Create history synchronized with Redux Store
 */
const history = syncHistoryWithStore(browserHistory, store)

/**
 * Render application to DOM
 */
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)

