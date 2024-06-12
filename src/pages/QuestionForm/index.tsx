import { useNavigate, useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'
import { Button } from '../Components/Button'
import { Stepper } from '../Components/Stepper'
import { questions } from './const'
import { useState } from 'react'
import { showSelectedRecepy } from './helpers'
import './style.css'
import React from 'react'

const defaultState = { type: null, taste: null, calories: null, isLowCost: null }

export const QuestionForm = () => {
    const { questionId } = useParams()
    const [state, setState] = useState(defaultState)

    const navigate = useNavigate()
    if (!questionId) {
        return navigate('/')
    }

    const { title, options, id } = questions[questionId]

    const questionsCount = questions.length

    const isQuestionAnswered = !state[id]

    const handleForwardClick = () => {
        navigate('/questionForm/' + (Number(questionId) + 1))
    }

    const handleBackwardClick = () => {
        navigate('/questionForm/' + (Number(questionId) - 1))
    }

    const handleResultClick = () => {
        const urlAddressPart = showSelectedRecepy(state).id
        navigate(`/recepy/${urlAddressPart}`)
    }

    const handleClick = ({ valueId, value }) => {
        setState({ ...state, [valueId]: value })
    }

    return (
        <div className="question-form">
            <h3>{title}</h3>
            <Stepper />
            <div className="cardcontainer">
                {options.map(({ value, description, img }) => (
                    <AnswerCard
                        key={description}
                        description={description}
                        img={img}
                        value={value}
                        onClick={handleClick}
                        id={id}
                        active={state[id] === value}
                    />
                ))}
            </div>
            {Number(questionId) === 0 ? null : (
                <Button ariaLabel={'Předchozí otázka'} name={'Nazpět'} handleClick={handleBackwardClick} />
            )}
            {Number(questionId) === questionsCount - 1 && true ? (
                <Button
                    ariaLabel={'Zobrazit výsledek'}
                    name={'Vyhodnotit'}
                    handleClick={handleResultClick}
                    disabled={isQuestionAnswered}
                />
            ) : (
                <Button
                    ariaLabel={'Další otázka'}
                    name={'Vpřed'}
                    handleClick={handleForwardClick}
                    disabled={isQuestionAnswered}
                />
            )}
        </div>
    )
}
