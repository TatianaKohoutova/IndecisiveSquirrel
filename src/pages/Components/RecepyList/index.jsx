import React from 'react'
import { Link } from 'react-router-dom'
import { recipes } from '../../../data/recipes'
import { Taste, Type } from '../../../const'
import './index.css'

const recipesArray = Object.values(recipes)
const recipesSalty = recipesArray.filter((recepy) => recepy.taste === Taste.Salty)
const recipesSweet = recipesArray.filter((recepy) => recepy.taste === Taste.Sweet)

const recipesSaltyVege = recipesSalty.filter((recepy) => recepy.type === Type.Vegetarian)
const recipesSaltyMeat = recipesSalty.filter((recepy) => recepy.type === Type.Meat)

export const RecepyList = () => {
    return (
        <div>
            <h1>Seznam receptů:</h1>
            <div className="text">
                <h2>Slané</h2>
                <div className="salty">
                    <div className="vege-section">
                        <h3>Vegetariánské</h3>
                        <ul>
                            {recipesSaltyVege.map((recepy) => (
                                <li key={recepy.id}>
                                    <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="meat-section">
                        <h3>Masové</h3>
                        <ul>
                            {recipesSaltyMeat.map((recepy) => (
                                <li key={recepy.id}>
                                    <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <h2>Sladké</h2>
                <div className="sweet">
                    <ul>
                        {recipesSweet.map((recepy) => (
                            <li key={recepy.id}>
                                <Link to={`/recepy/${recepy.id}`}>{recepy.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecepyList
