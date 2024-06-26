import { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { MenuItem } from '../MenuItem/menuItem'
import React from 'react'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClickHamb = () => {
        setMenuOpen(!menuOpen)
    }

    const handleClickItem = () => {
        setMenuOpen(false)
    }

    return (
        <div className="header">
            <Link to="./" className="logo"></Link>
            <div className={`menu ${menuOpen && 'menu_open'}`}>
                <MenuItem link={'./'} text={'Domů'} handleClick={handleClickItem} />
                <MenuItem link={'/game'} text={'O co jde?'} handleClick={handleClickItem} />
                <MenuItem link={'./about'} text={'O nás'} handleClick={handleClickItem} />
                <MenuItem link={'./recepyList'} text={'Recepty'} handleClick={handleClickItem} />
            </div>
            <div className="hamburger-menu" onClick={handleClickHamb}>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
            </div>
        </div>
    )
}
