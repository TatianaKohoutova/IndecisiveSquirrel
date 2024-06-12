import { useParams } from 'react-router-dom'
import './index.css'
import { recipes } from '../../data/recipes'
import { useState } from 'react'
import { Button } from '../Components/Button'

export const RecepyPage = () => {
    const { recepyId } = useParams()
    const amountOfPortions = recipes[recepyId].portions
    const preparationTime = recipes[recepyId].preparationTime
    const timeUnit = recipes[recepyId].timeUnit
    const [portions, setPortions] = useState(amountOfPortions)

    const handleRemovePortion = () => {
        if (portions > 1) {
            setPortions(portions - 1)
        } else {
            setPortions(portions)
        }
    }

    const getUnitLabel = (amount, unit) => {
        if (unit === 'lžičky') {
            return amount === 1 ? 'lžička' : 'lžičky'
        }
        return unit
    }

    return (
        <div>
            <div className="recepy-header bubble">
                <img className="bubbleArrow_recepy" src="../img/Arrow.png" alt="Šipka k bublině" />
                <h1 className="suggestion">Dneska vám doporučím....</h1>
                <h2 className="recepy-title">{recipes[recepyId].title}</h2>
            </div>
            <div className="recepy-detail text">
                <div className="recepy-additional">
                    <div className="recepy_info_icons">
                        <div className="recepy-additional__time">
                            <img className="recepy-additional--watchImg" src="/img/watch.png" alt="Čas" />
                            <h3>
                                {preparationTime} {timeUnit}
                            </h3>
                        </div>
                        <div className="recepy-additional__portions">
                            <img className="recepy-additional--portionImg" src="/img/pocetPorci.png" alt="Porce" />
                            <h3>{portions}</h3>
                            <div className="btns"></div>
                        </div>{' '}
                        <div className="btn_navigation">
                            <Button ariaLabel={'Ubrat porci'} handleClick={handleRemovePortion} name={'-'} />
                            <Button
                                ariaLabel={'Přidat porci'}
                                handleClick={() => setPortions(portions + 1)}
                                name={'+'}
                            />
                        </div>
                    </div>
                    <div className="recepy-additional__ingridients">
                        <h3>Ingredience</h3>
                        <ul>
                            {recipes[recepyId].ingredients.map((list) => (
                                <li key={list.name}>
                                {list.amount
                                    ? `${(list.amount / amountOfPortions) * portions} ${getUnitLabel((list.amount / amountOfPortions) * portions, list.unit)} `
                                    : 'Podle potřeby '}
                                {list.name}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="recepy-todo">
                    <h3>Jak na to?</h3>
                    <ol className="recept_toto--text">
                        {recipes[recepyId].process.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}
