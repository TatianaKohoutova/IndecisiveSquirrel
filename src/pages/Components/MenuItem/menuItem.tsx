import { NavLink } from 'react-router-dom'
import './menuItem.css'
import nut from '/img/Nut.png'
import React from 'react'

interface MenuItemProps {
    link: string
    text: string
    handleClick: () => void
}

export const MenuItem = ({ link, text, handleClick }: MenuItemProps) => {
    return (
        <NavLink className="menu_item" to={link} onClick={handleClick}>
            <img className="nut" src={nut} />
            {/* <div className="nut"></div> */}
            <p className="menu_item__text">{text}</p>
        </NavLink>
    )
}
