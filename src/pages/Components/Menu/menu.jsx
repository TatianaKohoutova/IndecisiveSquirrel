import { useState } from 'react'
import { Link } from 'react-router-dom'
import './menu.css'
import { MenuItem } from '../MenuItem/menuItem'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleClick = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="header">
            <Link to="./" className="logo"></Link>
            <div className={`menu ${menuOpen && 'menu_open'}`}>
                <MenuItem link={'./'} text={'Domů'} handleClick={handleClick} />
                <MenuItem link={'/game'} text={'O hře'} handleClick={handleClick} />
                <MenuItem link={'./about'} text={'O nás'} handleClick={handleClick} />
            </div>
            <div className="hamburger-menu" onClick={handleClick}>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
                <div className={`line ${menuOpen && 'line_open'}`}></div>
            </div>
        </div>
    )
}
