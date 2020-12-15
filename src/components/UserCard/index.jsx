import React from 'react'
import PropTypes from 'prop-types'
import './userCard.css'
import Label from '../Label'
import { NAME, GENDER, EMAIL } from '../../constants/labels'

function UserCard ({ name, email, gender }) {
  return (
    <div className='user-card'>
      <div className='card-body'>
        <p>
          <Label label={NAME} /> {name}
        </p>
        <p>
          <Label label={EMAIL} /> {email}
        </p>
        <p>
          <Label label={GENDER} /> {gender}
        </p>
      </div>
    </div>
  )
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
}

export default UserCard
