import { useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'

import './style.css'
import { questions } from './const'
import { useState } from 'react'

const defaultState = { type: null, activity: null, isLowCost: null }

export const QuestionForm = () => {
    const { questionId } = useParams()
    const { title, options, id } = questions[questionId]
    const [state, setState] = useState(defaultState)
    const handleClick = ({ valueId, value }) => {
        setState({ ...state, [valueId]: value })
    }
    console.log(state)

    return (
        <div className="question-form">
            <h3>{title}</h3>
            <div className="cardcontainer">
                {options.map(({ value, description, img }) => (
                    <AnswerCard
                        key={description}
                        description={description}
                        img={img}
                        value={value}
                        onClick={handleClick}
                        id={id}
                    />
                ))}
            </div>
        </div>
    )
}
