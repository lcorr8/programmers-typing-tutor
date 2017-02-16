import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTraining, updateEditorCode } from '../../actions'
import * as selectors from '../../selectors'
import Trainer from '../../components/Trainer'
import { without, head, last } from 'ramda'

function mapStateToProps (state, props) {
  const {
    mode,
    level
  } = props.params

  const training = selectors.getTraining(state, props)
  const currentId = training && head(without(training.lessonsCompleted, training.lessons))
  const lastId = training && last(without(training.lessonsCompleted, training.lessons))
  const lesson = currentId
    ? selectors.getLessonById(state, currentId)
    : selectors.getLessonById(state, lastId)

  const lessons = selectors.getLessons(state, props)

  return {
    mode,
    level,
    training,
    lesson,
    lessons,
    isLoaded: !!training
  }
}

const TrainerContainer = connect(
  mapStateToProps,
  {
    fetchTraining,
    updateEditorCode
  }
)(Trainer)

TrainerContainer.propTypes = {
  params: PropTypes.shape({
    mode: PropTypes.string,
    level: PropTypes.string
  }).isRequired
}

export default TrainerContainer
