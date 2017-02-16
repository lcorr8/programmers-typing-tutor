// import { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createTraining, updateTrainingForm } from '../../actions'
import * as selectors from '../../selectors'
import TrainingForm from '../../components/TrainingForm'
// import { without, head, last } from 'ramda'

function mapStateToProps (state, props) {
  return {
    training: selectors.getTrainingForm(state, props)
  }
}

const TrainingNewContainer = connect(
  mapStateToProps,
  {
    createTraining,
    updateTrainingForm
  }
)(TrainingForm)

TrainingNewContainer.propTypes = {
  // createTraining: PropTypes.func.isRequired,
  // updateTrainingForm: PropTypes.func.isRequired
}

export default TrainingNewContainer
