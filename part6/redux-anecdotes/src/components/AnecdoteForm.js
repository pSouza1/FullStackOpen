import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

import service from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = async (event) => {
        console.log("Chegou aqui")
        console.log(event.target.content.value)

        event.preventDefault()
        const newAnecdote = await service.createNew(event.target.content.value)
        dispatch(create(newAnecdote))
        dispatch(notify('New Anecdote: ' + event.target.content.value))

        event.target.content.value=""
      }

    return(
    <form onSubmit={createAnecdote}>
    <div><input name="content" /></div>
    <button type="submit">create</button>
  </form>
)
}

export default AnecdoteForm
