import React from 'react'
import '../App.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  if (message === 'Wrong Username or Password'){
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  else{
    return(
      <div className="success">
        {message}
      </div>
    )
  }
}

export default Notification