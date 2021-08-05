import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const randomNumber = () => {
    const min = 0;
    const max = anecdotes.length-1;

    return(
    setSelected(Math.floor(Math.random() * (max - min + 1)) + min)
    )
  }

  const increaseVoting = () => {

    
    const copy = [...points]
    copy[selected] = copy[selected] + 1

    return(
    setPoints(copy)
    )
  }

  const highestVotes = () => {
    
    let highest = points[0]
    let highestIndex = 0

    for (let index = 0; index < points.length; index++) {
      if (points[index]>highest)
      {
      highest = points[index]
      highestIndex = index
    }
  }
  
  return(
    highestIndex
  )
  }


  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])


  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
 
      <p>
        <button onClick= {increaseVoting}>
          vote
        </button>

        <button onClick= {randomNumber}>
          next anecdote
        </button>
      </p>


      <h1>Anecdote with most votes</h1>

      <p>{anecdotes[highestVotes()]}</p>
      <p>has {points[highestVotes()]} votes</p>

    </div>
  )
}

export default App