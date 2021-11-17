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

  const notify = (message) => ({
    'type': 'NOTIFY',
    'data': {message}
  })

  const stop = () => ({
    'type': 'STOP',
    'data': ""
  })


  export {notify, stop}
  export default reducer