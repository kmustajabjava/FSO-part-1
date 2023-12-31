import { useState } from 'react'
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0));
const rand=()=>
{
  const random = Math.floor(Math.random() * anecdotes.length);
      console.log(random, anecdotes[random]);
      setSelected(random);
}
const upVote=()=>
{
  const udpateVote = votes.map((value, index) => {
    if (index === selected) {
      return value + 1;
    } else {
      return value;
    }
  });
  setVote(udpateVote);
}
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button handleClick={upVote} text='Vote' />
      <Button handleClick={rand} text='nextAnecdote' />
      <br></br>
      <h1>Anecdote with most Votes<br></br></h1>
      <p>
        {anecdotes[votes.indexOf(Math.max(...votes))]}
        <br></br>
        has {Math.max(...votes)} votes.
      </p>
    </div>
  )
}

export default App