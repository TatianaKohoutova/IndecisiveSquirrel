import { useParams } from 'react-router-dom'
import { Step } from '../Step'
import { questions } from '../../QuestionForm/const'
import './style.css'

export const Stepper = () => {
    const questionsCount = questions.length
    const { questionId } = useParams()
    return (
        <div className="container_img_orisek">
            {Array.from({ length: questionsCount }).map((_, index) => {
                return <Step isAnswered={Number(questionId) < index} />
            })}
        </div>
    )
}
