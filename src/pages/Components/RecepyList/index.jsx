import { recipes } from '../../../data/recipes'
import React from 'react'
import { Link } from 'react-router-dom'

export const RecepyList = () => {
    return (
        <div>
            <h1>Seznam receptů:</h1>
            <ul>
                {Object.values(recipes).map((recepy) => (
                    <li key={recepy.id}>
                        <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecepyList
