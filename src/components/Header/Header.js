import React, { PropTypes } from 'react'
import Statistics from '../Statistics'
import LessonTimer from '../LessonTimer'
import { TEXT } from '../../constants'
import { calculateAccuracy } from '../../utils'

const Header = ({ lesson, training }) => {
  if (!training) {
    return null
  }
  const { keystrokes, finishedAt, statedAt, mistakes } = lesson
  const accuracy = calculateAccuracy(mistakes, keystrokes)
  const completedPercent = Math.floor(training.lessonsCompleted.length / training.lessons.length * 100)
  return (
    <div className='header'>
      <Statistics icon='speedometer' value={keystrokes} label={TEXT.Trainer.keystrokes} />
      <LessonTimer statedAt={statedAt} finishedAt={finishedAt} />
      <Statistics icon='pinpoint' value={`${accuracy}%`} label={TEXT.Trainer.accuracy} />
      <Statistics icon='graph' value={`${completedPercent}%`} label={TEXT.Trainer.completed} />
    </div>
  )
}

Header.propTypes = {
  lesson: PropTypes.object.isRequired,
  training: PropTypes.object.isRequired
}

export default Header
