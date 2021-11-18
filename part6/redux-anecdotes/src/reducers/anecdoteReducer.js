const vote = (id) => ({
  'type': 'VOTE',
  'id': id })


  const initialize = (anecdotes) => ({
    'type': 'INIT',
    'data': anecdotes
  })

  const create = (content) => ({
  'type': 'NEW_ANECDOTE',
  'data': content
})


  const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'INIT':
      return action.data

    case 'VOTE':
      return state.map(x => x.id !== action.id ? x : {...x, votes: x.votes+1})

    case 'NEW_ANECDOTE':
      return [...state, action.data]

    default:
      return state
  }
}

export { vote, create, initialize }
export default reducer