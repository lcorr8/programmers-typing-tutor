import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import { TEXT, TRAININGS } from '../../constants'
import { findIndex, propEq } from 'ramda'

import './Welcome.css'

const Welcome = (props) => {
  const classes = classNames(
    'Welcome'
  )
  const fetchTraining = (id, mode, level) => {
    const notFetched = findIndex(propEq('id', id), props.trainings) === -1
    if (notFetched) {
      props.fetchTraining(mode, level)
    }
  }
  return (
    <div className={classes}>
      <div className='inner'>
        <h1>{TEXT.Welcome.title}</h1>
        <h2>{TEXT.Welcome.subtitle}</h2>

        <div className='trainings-list'>
          {TRAININGS.map(({ id, mode, level, name, logo }) => (
            <Link key={id} to={`/${mode}/${level}`} title={name} onClick={() => fetchTraining(id, mode, level)}>
              <img src={logo} alt={name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome
