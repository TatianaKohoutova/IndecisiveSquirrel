import './style.css'

export const Button = ({ ariaLabel, handleClick, name }) => {
    return (
        <button className="btn button" aria-label={ariaLabel} onClick={handleClick}>
            {name}
        </button>
    )
}
