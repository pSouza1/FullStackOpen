import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import {vote} from '../reducers/anecdoteReducer'
import { notify, stop } from '../reducers/notificationReducer'

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
    setTimeout(() => dispatch(stop()), 5000)
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
