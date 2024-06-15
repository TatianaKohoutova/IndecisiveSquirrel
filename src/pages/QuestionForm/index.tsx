import { useNavigate, useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'
import { Button } from '../Components/Button'
import { Stepper } from '../Components/Stepper'
import { questions } from './const'
import { useState } from 'react'
import { showSelectedRecepy } from './helpers'
import './style.css'
import React from 'react'

interface State {
    type: string | null
    taste: string | null
    calories: string | null
    isLowCost: boolean | null
    [key: string]: any
}

const defaultState: State = { type: null, taste: null, calories: null, isLowCost: null }

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
            {Number(questionId) === 0 ? null : (
                <div className="button-container-top">
                    <Button className="button-back" ariaLabel={'Předchozí otázka'} name={'Zpět'} handleClick={handleBackwardClick} />
                </div>
            )}
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
            <div className="button-container-bottom">
                {Number(questionId) === questionsCount - 1 && true ? (
                    <Button
                        className="button-result"
                        ariaLabel={'Zobrazit výsledek'}
                        name={'Vyhodnotit'}
                        handleClick={handleResultClick}
                        disabled={isQuestionAnswered}
                    />
                ) : (
                    <Button
                        className="button-next"
                        ariaLabel={'Další otázka'}
                        name={'Další'}
                        handleClick={handleForwardClick}
                        disabled={isQuestionAnswered}
                    />
                )}
            </div>
        </div>
    )
}
