export const AnswerCard = ({ description, img }) => {
    return (
        <div class="container">
            <div class="card">
                <div class="front">
                    <p>{img}</p>
                </div>
                <div class="back">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
