import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import {vote} from '../reducers/anecdoteReducer'
import { notify, stop } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector((state) => state.anecdotes);

  const sortedAnecdotes = [...anecdotes].sort((a, b) => {
    return b.votes - a.votes;
  })

  const dispatch = useDispatch()

    const handleVote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(notify(`You voted '${anecdote.content}'`))
    setTimeout(() => dispatch(stop()), 3000)
  }

  const voteAnecdote = (id) => {
    console.log("VOTE", id);
    dispatch(vote(id))
  }



  return(
    sortedAnecdotes.map(anecdote =>

        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>

          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote.id)+handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList;
