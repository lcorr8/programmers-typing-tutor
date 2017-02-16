import Speedometer from 'react-icons/lib/io/speedometer'
import Clock from 'react-icons/lib/io/clock'
import Pinpoint from 'react-icons/lib/io/pinpoint'
import Pulse from 'react-icons/lib/io/ios-pulse'
import Bug from 'react-icons/lib/io/bug'
import Graph from 'react-icons/lib/io/pie-graph'

const icons = {
  speedometer: Speedometer,
  clock: Clock,
  pinpoint: Pinpoint,
  pulse: Pulse,
  bug: Bug,
  graph: Graph
}

const Icon = (props) => {
  return icons[props.name](props)
}

export default Icon
