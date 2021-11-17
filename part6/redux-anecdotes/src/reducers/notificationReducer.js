const reducer = (state = null, action) => {
    switch (action.type) {
      case 'NOTIFY':
        return action.data.message
      default:
        return state
    }
  }

  const addNotification = (message) => ({
    'type': 'NOTIFY',
    'data': {message}
  })


  export default reducer