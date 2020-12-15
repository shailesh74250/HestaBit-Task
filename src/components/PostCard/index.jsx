import React from 'react'
import PropTypes from 'prop-types'
import './postCard.css'

function PostCard ({ cardTitle, cardBody }) {
  return (
    <div className='post-card'>
      <div className='card-title'>
        <h3>{cardTitle}</h3>
      </div>
      <div className='card-body'>
        <p>{cardBody}</p>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardBody: PropTypes.func.isRequired
}

export default PostCard
