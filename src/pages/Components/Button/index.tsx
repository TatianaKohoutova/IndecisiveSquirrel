import './style.css'
import React from 'react'

interface ButtonProps {
    ariaLabel: string
    handleClick: () => void
    name: string
}

export const Button = ({ ariaLabel, handleClick, name }:ButtonProps) => {
    return (
        <button className="btn" aria-label={ariaLabel} onClick={handleClick}>
            {name}
        </button>
    )
}
