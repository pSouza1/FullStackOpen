const reducer = (state = null, action) => {
    switch (action.type) {
      case 'NOTIFY':
        return action.data.message

      case 'STOP':
        return ""

        default:
        return state
    }
  }

  const setNotification = (message) => ({
    'type': 'NOTIFY',
    'data': {message}
  })

  const clearNotification = () => ({
    'type': 'STOP',
    'data': ""
  })


  const notify = (message, timer = 3) => {
    return async dispatch => {
      await dispatch(setNotification(message))
      setTimeout(
        async () => await dispatch(clearNotification()),
        timer * 1000
      )
    }
  }

  export { notify }
  export default reducer