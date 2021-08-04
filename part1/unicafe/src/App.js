import React, { useState } from 'react'

const Statistics = (props) => {

if (props.good+props.neutral+props.bad===0)
{
  return(
    <div> 
    <p>No feedback given</p> 
    </div>
    )
}
return(
  <div>
  <h1>statistics</h1>

  <p> good {props.good} </p>
  <p> neutral {props.neutral} </p>
  <p> bad {props.bad} </p>
  <p> all {props.good+props.neutral+props.bad}  </p>
  <p> average {(props.good-props.bad)/(props.good+props.neutral+props.bad)}</p>
  <p> positive {(props.good/(props.good+props.neutral+props.bad))*100}%</p>
  </div>
)
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  
  const increaseNeutral = () => setNeutral(neutral + 1)

  const increaseBad = () => setBad(bad + 1)
  

  return (
    <div>

      <h1>give feedback</h1>

      <button onClick={increaseGood}>
        good
      </button>
      <button onClick={increaseNeutral}> 
        neutral
      </button>
      <button onClick={increaseBad}> 
        bad
      </button>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App