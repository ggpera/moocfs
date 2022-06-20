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
                <h1>statistics</h1>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {total}</div>
                <Average total={total} good={good} neutral={neutral} bad={bad} />
                <Positive good={good} total={total} />
            </div>
        </div>
    )
}

export default App