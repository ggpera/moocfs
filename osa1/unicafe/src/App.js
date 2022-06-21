import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}  
    </button>
)

const StatisticLine = ({ text , value} ) => <div>{text} {value}</div>

const Statistics = ({ good, neutral, bad }) => {
    const total =  good + neutral + bad

    if (total === 0) 
        return (
            <div>
                No feedback given
            </div>
        )

    const average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
    const positive = good / total * 100 + " %"

    return (
        <div>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positive} />
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1) 
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

     return (
        <div>
            <div>
                <h1>give feedback</h1>
                <Button handleClick={handleGoodClick} text='good' />
                <Button handleClick={handleNeutralClick} text='neutral' />
                <Button handleClick={handleBadClick} text='bad' />
            </div>
            <div>
                <h1>statistics</h1>
                <Statistics good={good} neutral={neutral} bad={bad} />
            </div>
        </div>
    )
}

export default App