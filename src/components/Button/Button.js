import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './Button.css'

const Button = (props) => (
  props.type === 'submit'
  ? <button className='ui button' {...props}>{props.children || props.content }</button>
  : <Link className='ui button' {...props}>{props.children || props.content }</Link>
)

Button.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node
}

export default Button
