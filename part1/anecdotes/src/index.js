import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const App = ({anecdotes}) => {
    const [selected, setSelected] = useState(0)

    const emptyVotes = new Array(anecdotes.length).fill(0)
    const [votes, setVotes] = useState(emptyVotes)
    const [most, setMost] = useState(0)

    const random = Math.floor(Math.random()*anecdotes.length)

    const next = () => {
        setSelected(random)
    }
    const vote = () => {
        const copy = [...votes]
        copy[selected] += 1
        if(copy[selected]>copy[most]) {
            setMost(selected)
        }
        setVotes(copy)
    }

    return (
        <div>
        <h1>Anecdote of the day</h1>
        <h3>{anecdotes[selected]}</h3>
        <h3>has {votes[selected]} </h3>
        <Button onClick={vote} text={"vote"} />
        <Button onClick={next} text={"next anecdote"} />
        <h1>Anecdote with most votes</h1>
        <h3>{anecdotes[most]}</h3>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)

