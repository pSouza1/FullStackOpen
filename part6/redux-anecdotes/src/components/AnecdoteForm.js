import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { notify, stop } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        console.log("Chegou aqui")
        event.preventDefault()
        dispatch(create(event))
        dispatch(notify('New Anecdote: ' + event.target.content.value))
        setTimeout(() => dispatch(stop()), 5000)
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
