import { NavLink } from 'react-router-dom'
import './menuItem.css'

export const MenuItem = ({ link, text, handleClick }) => {
    return (
        <NavLink className="menu_item" to={link} onClick={handleClick}>
            <div className="nut"></div>
            <p className="menu_item__text">{text}</p>
        </NavLink>
    )
}
