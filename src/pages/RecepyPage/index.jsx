import { useParams } from 'react-router-dom'
import './index.css'
import { recipes } from '../../data/recipes'
import { useState } from 'react'

export const RecepyPage = () => {
    const [reply, setReply] = useState()

    // reply = {
    //   {
    //     id: 1
    //     value: spicy
    //   },
    //   {},
    //   {},
    //   {},
    // }

    let { recepyId } = useParams()
    recepyId = 'rajcatovaVejceZPanve'

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
                        <p>x 2</p>
                    </div>
                    <div className="recepy-additional__ingridients">
                        <h3>Ingridience</h3>
                        <ul>
                            {recipes[recepyId].ingredients.map((list) => (
                                <li key={list.name}>
                                    {list.name} - {list.amount} {list.unit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
