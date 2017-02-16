/* global it */

import React from 'react'
import ReactDOM from 'react-dom'
import Trainer from './Trainer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Trainer />, div)
})
