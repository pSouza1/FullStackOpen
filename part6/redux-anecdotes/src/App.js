import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {asObject} from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('VOTE', id)
    dispatch({type: 'VOTE', id: id})
  }

  const create = (event) => {
    event.preventDefault()
    dispatch({ type: 'NEW_ANECDOTE', data: asObject(event.target.content.value) })
    event.target.content.value=""
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>

      <form onSubmit={create}>
        <div><input name="content" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App