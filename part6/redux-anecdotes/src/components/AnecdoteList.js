import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import {vote} from '../reducers/anecdoteReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector((state) => state);

  const sortedAnecdotes = [...anecdotes].sort((a, b) => {
    return b.votes - a.votes;
  })

  const dispatch = useDispatch()

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
            <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList;
