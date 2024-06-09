import { recipes } from '../../../data/recipes'
import React from 'react'
import { Link } from 'react-router-dom'
import { Taste } from '../../../const'

const recipesArray = Object.values(recipes)
const recipesSalty = recipesArray.filter((recepy) => recepy.taste === Taste.Salty)
const recipesSweet = recipesArray.filter((recepy) => recepy.taste === Taste.Sweet)
export const RecepyList = () => {
    return (
        <div>
            <h1>Seznam receptů:</h1>
            <h2>Slané:</h2>
            <ul>
                {recipesSalty.map((recepy) => (
                    <li key={recepy.id}>
                        <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                    </li>
                ))}
            </ul>
            <h2>Sladké:</h2>
            <ul>
                {recipesSweet.map((recepy) => (
                    <li key={recepy.id}>
                        <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecepyList
