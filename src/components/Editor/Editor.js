import React, { PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import classNames from 'classnames'
import {
  CODE_MIRROR_MODES,
  CODE_THEME
} from '../../constants'

import './Editor.css'

const Editor = (props) => {
  const {
    onChangeCode,
    completed,
    value,
    mode
  } = props

  const options = {
    mode: mode === 'html' ? 'htmlmixed' : mode,
    theme: CODE_THEME,
    autofocus: true,
    viewportMargin: Infinity,
    readOnly: completed ? 'nocursor' : false
  }

  const classes = classNames(
    'Editor'
  )

  return (
    <CodeMirror
      className={classes}
      value={value}
      options={options}
      onChange={onChangeCode}
    />
  )
}

Editor.propTypes = {
  onChangeCode: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  value: PropTypes.string.isRequired,
  mode: React.PropTypes.oneOf(CODE_MIRROR_MODES).isRequired
}

export default Editor
