import { useNavigate, useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'
import { Button } from '../Components/Button'
import { Stepper } from '../Components/Stepper'
import { questions } from './const'
import { useState } from 'react'
import { recipes } from '../../data/recipes'
import { showSelectedRecepy } from './helpers'
import './style.css'
import { Step } from '../Components/Step'

const defaultState = { taste: null, calories: null, type: null, isLowCost: null }

export const QuestionForm = () => {
    const { questionId } = useParams()
    const [state, setState] = useState(defaultState)
    const { title, options, id } = questions[questionId]
    const navigate = useNavigate()
    const questionsCount = questions.length
    const [active, setActive] = useState(false)
    const questionKey = state.questionId

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
        setActive(value)
        console.log(value)
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
                        active={active === value}
                    />
                ))}
            </div>
            {Number(questionId) === 0 ? null : (
                <Button ariaLabel={'Předchozí otázka'} name={'Nazpět'} handleClick={handleBackwardClick} />
            )}
            {Number(questionId) === questionsCount - 1 && true ? (
                <Button ariaLabel={'Zobrazit výsledek'} name={'Vyhodnotit'} handleClick={handleResultClick} />
            ) : (
                <Button ariaLabel={'Další otázka'} name={'Vpřed'} handleClick={handleForwardClick} />
            )}
        </div>
    )
}
