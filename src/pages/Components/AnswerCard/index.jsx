export const AnswerCard = ({ description, img }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="front">
                    <p>{img}</p>
                </div>
                <div className="back">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
