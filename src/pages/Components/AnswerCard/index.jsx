export const AnswerCard = ({ description, img, value, id, onClick }) => {
    return (
        <div className="container" onClick={() => onClick({ valueId: id, value })}>
            <div className="card">
                <div className="front">
               <img className="card-image" src={img} alt="option"/>
                </div>
                <div className="back">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
