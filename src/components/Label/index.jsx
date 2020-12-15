import React from 'react'
import PropTypes from 'prop-types'
import './label.css'

const Label = React.memo(function Label ({ label }) {
  return <label className='label'>{label}</label>
})

Label.propTypes = {
  label: PropTypes.string.isRequired
}

export default Label
