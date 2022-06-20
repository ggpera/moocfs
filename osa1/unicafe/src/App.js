import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}  
    </button>
)

const Positive = (props) => {
    if (props.good === 0) {
        return (
            <div>
                positive 0 %
            </div>
        )
    }
    return (
        <div>
            positive {(props.good / props.total) * 100} %
        </div>
    )
}

const Average = (props) => {
    if (props.total === 0) 
        return (
            <div>
                average 0
            </div>
        )
    return (
        <div>
            average {((props.good * 1) + (props.neutral * 0) + (props.bad * -1)) / props.total}
        </div>
    )
}

const Statistics = (props) => {
    if (props.total === 0) 
        return (
            <div>
                <h1>statistics</h1>
                No feedback given
            </div>
        )
    return (
        <div>
            <h1>statistics</h1>
            <div>good {props.good}</div>
            <div>neutral {props.neutral}</div>
            <div>bad {props.bad}</div>
            <div>all {props.total}</div>
            <Average total={props.total} good={props.good} neutral={props.neutral} bad={props.bad} />
            <Positive good={props.good} total={props.total} />
        </div>
    )
}

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1) 
        setTotal(total + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
        setTotal(total + 1)
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
                <Statistics total={total} good={good} neutral={neutral} bad={bad} />
            </div>
        </div>
    )
}

export default App