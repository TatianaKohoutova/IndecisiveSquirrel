import { useState } from 'react'

export const AnswerCard = ({ description, img, value, id, onClick, active }) => {
    const clicking = () => {
        onClick({ valueId: id, value })
    }

    return (
        <div className={`container`} onClick={clicking}>
            <div className={`card ${active ? 'activeCard' : ''}`}>
                <div className="front">
                    <img className="card-image" src={img} alt="option" />
                </div>
                <div className="back">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
