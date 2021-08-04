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

    <table>
    <tbody>
    <StatisticLine text="good" value = {props.good} />
    <StatisticLine text="neutral" value = {props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value = {props.good+props.neutral+props.bad} />
    <StatisticLine text="average" value = {(props.good-props.bad)/(props.good+props.neutral+props.bad)} />
    <StatisticLine text="positive" value ={(props.good/(props.good+props.neutral+props.bad))*100+"%"}/>
    </tbody>
    </table>
  </div>
)
}

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Button = (props) => <button onClick={props.increaseButton}>{props.text}</button>



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

      <Button increaseButton={increaseGood} text='good' /> 
      <Button increaseButton={increaseNeutral} text='neutral' /> 
      <Button increaseButton={increaseBad} text='bad' />

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App