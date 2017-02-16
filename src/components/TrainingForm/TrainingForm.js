import CodeMirror from 'react-codemirror'
import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './TrainingForm.css'

import Button from '../Button'

import {
  CODE_THEME
} from '../../constants'

const TrainingForm = ({ training, updateTrainingForm }) => {
  const classes = classNames(
    'TrainingForm'
  )

  const options = {
    theme: CODE_THEME,
    lineWrapping: true,
    viewportMargin: Infinity
  }

  return (
    <form className={classes}>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td colSpan='2'>
              <input className='field-text' type='text' name='name' defaultValue={training.name} />
            </td>
          </tr>
          <tr>
            <th>Mode:</th>
            <td colSpan='2'>
              <input className='field-text' type='text' name='mode' defaultValue={training.mode} />
            </td>
          </tr>
          <tr>
            <th>Level:</th>
            <td colSpan='2'>
              <input className='field-text' type='text' name='level' defaultValue={training.level} />
            </td>
          </tr>
          {training.lessons.map(lesson => (
            <tr key={lesson.id}>
              <th>{lesson.id}</th>
              <td>
                <CodeMirror
                  placeholder='Example'
                  className={classes}
                  value={lesson.example}
                  options={{ ...options, mode: 'javascript' }}
                  onChange={example => updateTrainingForm()}
                />
              </td>
              <td>
                <CodeMirror
                  placeholder='Exercise'
                  className={classes}
                  value={lesson.exercise}
                  options={{ ...options, mode: 'markdown' }}
                  onChange={exercise => updateTrainingForm()}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button type='submit' className='ui button'>Save form</Button>
    </form>
  )
}

TrainingForm.propTypes = {
  training: PropTypes.object.isRequired
}

export default TrainingForm
