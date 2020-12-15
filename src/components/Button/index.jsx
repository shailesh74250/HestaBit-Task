import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = React.memo(function Button ({ label, onClickHandler }) {
  return (
    <button className='button' onClick={onClickHandler}>
      {label}
    </button>
  )
})

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
}

export default Button
