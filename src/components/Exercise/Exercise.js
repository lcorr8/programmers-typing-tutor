import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './Exercise.css'
import Markdown from 'react-markdown'

const Exercise = (props) => {
  const {
    exercise
  } = props

  const classes = classNames(
    'Exercise'
  )

  return (
    <Markdown className={classes} source={exercise} />
  )
}

Exercise.propTypes = {
  exercise: PropTypes.string.isRequired
}

export default Exercise
