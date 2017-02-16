import { connect } from 'react-redux'
import { fetchTraining } from '../../actions'
import * as selectors from '../../selectors'
import Welcome from '../../components/Welcome'

function mapStateToProps (state, props) {
  const trainings = selectors.getTrainings(state, props)

  return {
    trainings
  }
}

const WelcomeContainer = connect(
  mapStateToProps,
  { fetchTraining }
)(Welcome)

export default WelcomeContainer
