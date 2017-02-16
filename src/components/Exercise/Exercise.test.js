/* global it */

import React from 'react'
import ReactDOM from 'react-dom'
import Exercise from './Exercise'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Exercise />, div)
})
