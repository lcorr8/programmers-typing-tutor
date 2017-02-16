import React, { Component, PropTypes } from 'react'
import { TEXT } from '../../constants'
import Statistics from '../Statistics'

class LessonTimer extends Component {
  componentDidMount () {
    this.interval = setInterval(() => this.forceUpdate(), 500)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }
  render () {
    const { statedAt, finishedAt } = this.props
    let elapsedTime = 0
    if (statedAt) {
      elapsedTime = ((Date.now() - statedAt) / 1000)
    }
    if (finishedAt) {
      elapsedTime = ((finishedAt - statedAt) / 1000)
    }
    return (
      <Statistics icon='clock' value={`${elapsedTime} sec`} label={TEXT.Trainer.elapsedTime} />
    )
  }
}

LessonTimer.propTypes = {
  statedAt: PropTypes.number,
  finishedAt: PropTypes.number
}

export default LessonTimer
