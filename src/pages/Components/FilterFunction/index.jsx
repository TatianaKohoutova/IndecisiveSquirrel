// import { recipes } from './data/recipes'
import { recipes } from '../../../data/recipes'

const usersReplies = {
    activity: 'Medium',
    isLowCost: false,
    type: 'Vege',
}

const recepyArray = Object.values(recipes)
console.log(recepyArray)

export const filteredRecepies = recepyArray
    .filter((recepy) => recepy.activity === usersReplies.activity)
    .filter((recepy) => recepy.isLowCost === usersReplies.isLowCost)
    .filter((recepy) => recepy.type === usersReplies.type)

const filteredRecepy = filteredRecepies[Math.floor(Math.random() * filteredRecepies.length)]

// {
//     activity: 'Medium'
//     id: 'rajcatovaVejceZPanve'
//     isLowCost: false
//     title: 'Rajčatová vejce z pánve'
//     type: 'Vege'
// }
