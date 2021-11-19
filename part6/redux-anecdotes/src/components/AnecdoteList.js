import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import {vote} from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    let res = anecdotes
    if (filter) {
      res = anecdotes.filter(anecdote =>
        anecdote.content.includes(filter))
    }
    return res
  })


  const sortedAnecdotes = [...anecdotes].sort((a, b) => {
    return b.votes - a.votes;
    console.log(sortedAnecdotes)
  })

  const dispatch = useDispatch()

    const handleVote = (anecdote) => {
    dispatch(notify(`You voted '${anecdote.content}'`))
  }

  const voteAnecdote = (anecdote) => {
    console.log("VOTE", anecdote);
    dispatch(vote(anecdote))
  }



  return(
    sortedAnecdotes.map(anecdote =>

        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>

          <div>
            has {anecdote.votes}
            <button onClick={() => voteAnecdote(anecdote)+handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )
  )
}

export default AnecdoteList;
