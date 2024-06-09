import { useParams } from 'react-router-dom'
import './index.css'
import { recipes } from '../../data/recipes'
import { useState } from 'react'
import { Button } from '../Components/Button'

export const RecepyPage = () => {
    const { recepyId } = useParams()
    const amountOfPortions = recipes[recepyId].portions
    const amountOfIngredients = recipes[recepyId].ingredients.amount
    const [reply, setReply] = useState()
    const [portions, setPortions] = useState(amountOfPortions)
    const handleRemovePortion = () => {
        if (portions > 1) {
            setPortions(portions - 1)
        } else {
            setPortions(portions)
        }
    }

    return (
        <div>
            <div className="recepy-header bubble">
                <img className="bubbleArrow_recepy" src="../img/Arrow.png" alt="Bubble arrow" />
                <h1 className="suggestion">Dneska vám doporučím....</h1>
                <h2 className="recepy-title">{recipes[recepyId].title}</h2>
            </div>
            <div className="recepy-detail text">
                <div className="recepy-todo">
                    {/* <img className="recepy_todo--img" src="../../img/Volba.png" alt="" /> */}
                    <h3>Jak na to?</h3>
                    <ol className="recept_toto--text">
                        {recipes[recepyId].process.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>
                <div className="recepy-additional">
                    <div className="recepy-additional__time">
                        <img className="recepy-additional--watchImg" src="/img/Watch.png" alt="" />
                        <p>do 30 minut</p>
                    </div>
                    <div className="recepy-additional__portions">
                        <img className="recepy-additional--portionImg" src="/img/pocetPorci.png" alt="" />
                        <p>{portions}</p>
                        <div className="btns"></div>
                    </div>{' '}
                    <span className="btn_navigation">
                        <Button ariaLabel={'Ubrat porci'} handleClick={handleRemovePortion} name={'Ubrat porci'} />
                        <Button
                            ariaLabel={'Přidat porci'}
                            handleClick={() => setPortions(portions + 1)}
                            name={'Přidat porci'}
                        />
                    </span>
                    <div className="recepy-additional__ingridients">
                        <h3>Ingridience</h3>
                        <ul>
                            {recipes[recepyId].ingredients.map((list) => (
                                <li key={list.name}>
                                    {list.name} - {(list.amount / amountOfPortions) * portions} {list.unit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
