import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

const Title = React.memo(function Title ({ label }) {
  return <h1 className='title'>{label}</h1>
})

Title.propTypes = {
  label: PropTypes.string.isRequired
}

export default Title
