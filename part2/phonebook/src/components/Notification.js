import React from 'react'

const Notification = ({ message, classNameStyle }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={classNameStyle}>
      {message}
    </div>
  )
}

export default Notification