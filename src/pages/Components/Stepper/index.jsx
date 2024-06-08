import { useParams } from 'react-router-dom'
import { Step } from '../Step'
import { questions } from '../../QuestionForm/const'

export const Stepper = () => {
    const questionsCount = questions.length
    const questionMatch = useParams()
    return Array.from({ length: questionsCount }).map((_, index) => {
        return <Step isAnswered={questionMatch < index} />
    })
}
