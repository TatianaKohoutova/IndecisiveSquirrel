import { useNavigate, useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'
import { Button } from '../Components/Button'
import { questions } from './const'
import { useState } from 'react'
import { recipes } from '../../data/recipes'
import { showSelectedRecepy } from './helpers'
import './style.css'

const defaultState = { type: null, activity: null, isLowCost: null }

export const QuestionForm = () => {
    const { questionId } = useParams()
    const [state, setState] = useState(defaultState)
    const { title, options, id } = questions[questionId]
    const navigate = useNavigate()
    const questionsCount = questions.length

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

    const handleResultClick = () => {
        const urlAddressPart = showSelectedRecepy(state).id
        console.log(showSelectedRecepy(state))
        navigate(`/recepy/${urlAddressPart}`)
    }

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
            {Number(questionId) === 0 ? null : (
                <Button ariaLabel={'Předchozí otázka'} name={'Nazpět'} handleClick={handleBackwardClick} />
            )}
            {Number(questionId) === questionsCount - 1 ? (
                <Button ariaLabel={'Zobrazit výsledek'} name={'Vyhodnotit'} handleClick={handleResultClick} />
            ) : (
                <Button ariaLabel={'Další otázka'} name={'Vpřed'} handleClick={handleForwardClick} />
            )}
        </div>
    )
}
