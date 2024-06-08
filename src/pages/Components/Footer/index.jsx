import { Link } from 'react-router-dom'
import './index.css'

export const Footer = () => {
    return (
        <div className="footer">
            <Link className="footer-text" to={'./about'}>
                by Bára, Táňa a Jana
            </Link>
        </div>
    )
}
