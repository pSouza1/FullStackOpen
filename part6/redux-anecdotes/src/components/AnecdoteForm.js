import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        console.log("Chegou aqui")
        event.preventDefault()
        dispatch(create(event))
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
