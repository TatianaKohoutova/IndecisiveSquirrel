import './style.css'
import React from 'react'

interface ButtonProps {
    ariaLabel: string
    handleClick: () => void
    name: string
    disabled?: boolean
    className?: string
}

export const Button = ({ ariaLabel, handleClick, name, disabled }: ButtonProps) => {
    return (
        <button className="btn button" aria-label={ariaLabel} onClick={handleClick} disabled={disabled}>
            {name}
        </button>
    )
}
