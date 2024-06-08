export const Step = ({ isAnswered }) => {
    return <img src={isAnswered ? './nutSaturated.png' : './nutTransparent.png'} alt="Orisek" />
}
