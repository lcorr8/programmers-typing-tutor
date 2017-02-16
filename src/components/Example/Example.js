import React, { PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import classNames from 'classnames'
import {
  CODE_MIRROR_MODES,
  CODE_THEME
} from '../../constants'

import './Example.css'

const Example = (props) => {
  const {
    value,
    mode
  } = props

  const options = {
    mode: mode === 'html' ? 'htmlmixed' : mode,
    theme: CODE_THEME,
    viewportMargin: Infinity,
    readOnly: 'nocursor'
  }

  const classes = classNames(
    'Example'
  )

  return (
    <CodeMirror
      className={classes}
      value={value}
      options={options}
    />
  )
}

Example.propTypes = {
  value: PropTypes.string.isRequired,
  mode: React.PropTypes.oneOf(CODE_MIRROR_MODES).isRequired
}

export default Example
