import { useParams } from 'react-router-dom'
import './index.css'
import { recipes } from '../../data/recipes'

export const RecepyPage = () => {
    let { recepyId } = useParams()
    recepyId = 'rajcatovaVejceZPanve'

    return (
        <div>
            <div className="recepy-title bubble">
                <h1>Dneska vám doporučím....</h1>
                <h2>{recipes[recepyId].title}</h2>
            </div>
            <div className="recepy-detail"></div>
        </div>
    )
}
