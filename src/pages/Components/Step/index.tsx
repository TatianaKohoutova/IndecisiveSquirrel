import './style.css'

interface StepProps {
    isAnswered: boolean
}

export const Step = ({ isAnswered }: StepProps) => {
    return <img className="img_orisek" src={isAnswered ? '/nutTransparent.png' : '/nutSaturated.png'} alt="Orisek" />
}
