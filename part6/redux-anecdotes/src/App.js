import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {vote, create} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)

  const sortedAnecdotes = [...anecdotes].sort((a, b) => {
    return b.votes - a.votes
  })


  const dispatch = useDispatch()

  const voteAnecdote = (id) => {
    console.log('VOTE', id)
    dispatch(vote(id))
  }

  const createAnecdote = (event) => {
    event.preventDefault()
    dispatch(create(event))
    event.target.content.value=""
  }

  return (
    <div>
      <h2>Anecdotes</h2>

      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>

      <form onSubmit={createAnecdote}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App