import { useNavigate, useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'
import { Button } from '../Components/Button'
import { questions } from './const'
import { useState } from 'react'
import './style.css'

const defaultState = { type: null, activity: null, isLowCost: null }

export const QuestionForm = () => {
    const { questionId } = useParams()

    const handleForwardClick = () => {
        if (Number(questionId) === questionsCount) {
            navigate('/recepy')
        } else {
            navigate('/questionForm/' + (Number(questionId) + 1))
        }
    }

    const handleBackwardClick = () => {
        navigate('/questionForm/' + (Number(questionId) - 1))
    }

    const { title, options, id } = questions[questionId]
    const [state, setState] = useState(defaultState)

    const handleClick = ({ valueId, value }) => {
        setState({ ...state, [valueId]: value })
    }

    console.log(state)

    const navigate = useNavigate()
    const questionsCount = questions.length

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
            {Number(questionId) === 0 ? null : (
                <Button ariaLabel={'Předchozí otázka'} name={'Nazpět'} handleClick={handleBackwardClick} />
            )}
            <Button ariaLabel={'Další otázka'} name={'Vpřed'} handleClick={handleForwardClick} />
        </div>
    )
}
