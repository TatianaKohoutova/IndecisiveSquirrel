import { useParams } from 'react-router-dom'
import { AnswerCard } from '../Components/AnswerCard'

import './style.css'
import { questions } from './const'

export const QuestionForm = () => {
    const { questionId } = useParams()
    const { title, options } = questions[questionId]

    return (
        <div className="question-form">
            <h3>{title}</h3>
            <div className="cardcontainer">
                {options.map(({ description, img }) => (
                    <AnswerCard key={description} description={description} img={img} />
                ))}
            </div>
        </div>
    )
}
