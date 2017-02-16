import React, { PropTypes } from 'react'
import Icon from '../Icon'

import './Statistics.css'

const Statistics = ({ icon, value, label }) => {
  return (
    <div className='Statistics'>
      <Icon name={icon} size={50} color='aaa' />
      <span className='param'>
        <span className='value'>{value}</span>
        <span className='label'>{label}</span>
      </span>
    </div>
  )
}

Statistics.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  label: PropTypes.string.isRequired
}

export default Statistics
