export const AnswerCard = ({ description, img, value, id, onClick }) => {
    return (
        <div className="container" onClick={() => onClick({ valueId: id, value })}>
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
