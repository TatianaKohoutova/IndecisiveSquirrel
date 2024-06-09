import { NavLink } from 'react-router-dom'
import './menuItem.css'
import nut from '/img/Nut.png'

export const MenuItem = ({ link, text, handleClick }) => {
    return (
        <NavLink className="menu_item" to={link} onClick={handleClick}>
            <img className="nut" src={nut}></img>
            {/* <div className="nut"></div> */}
            <p className="menu_item__text">{text}</p>
        </NavLink>
    )
}
