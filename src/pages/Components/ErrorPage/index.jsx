import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Stránka nebyla nalezena</h1>
            <p>Je nám líto, ale stránka, kterou hledáte, neexistuje.</p>
            <Link to="/" className="button">
                Zpět na hlavní stránku
            </Link>
            <div>
                <img src="../img/SquirrelOnTree.png" alt="Lezoucí veverka" className="img_error" />
            </div>
        </div>
    )
}

export default ErrorPage
