import { useState } from 'react'
const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No Feedback Given
      </div>
    )
  }
  return(
<div>
  <h1>statistics</h1>
  <StatisticLine text="good"    value={props.good}/>
  <StatisticLine text="nuetral" value={props.neutral}/>
  <StatisticLine text="bad"     value={props.bad}/>
  <StatisticLine text="total"   value={props.total}/>
  <StatisticLine text="average" value={props.avg}/>
  <StatisticLine text="positive"value={`${props.positive}%`}/>
</div>)
}
const StatisticLine=(props)=>{
  return(
  <div>
    <table>
    <tbody>
  <tr>
    <th>{props.text}</th>
    <th>{props.value}</th>
  </tr>
  </tbody>
  </table>
  </div>)
}
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [allClicks, setAll] = useState([])
  const Avg=good*1+neutral*0+bad*-1;
  const SetAvg=Avg/total
  const positive=good/total*100;
  const setG = () => {
    console.log('good before', good)
    const updatedG = good + 1
    setGood(updatedG)
    console.log('good now', updatedG)
    setTotal(updatedG + neutral + bad) 
    setAll(allClicks.concat('G'))
  }
  const setN = () => {
    console.log('neutral before', neutral)
    const updatedN = neutral + 1
    setNeutral(updatedN)
    console.log('neutral now', updatedN)
    setTotal(updatedN + good + bad) 
    setAll(allClicks.concat('N'))
  }
  const setB = () => {
    console.log('bad before', bad)
    const updatedB = bad + 1
    setBad(updatedB)
    console.log('bad now', updatedB)
    setTotal(updatedB + neutral + good) 
    setAll(allClicks.concat('B'))
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setG} text="good" />
      <Button handleClick={setN} text="nuetral" />
      <Button handleClick={setB} text="bad" />
      <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} total={total} avg={SetAvg} positive={positive}/>
    </div>
  )
}
export default App