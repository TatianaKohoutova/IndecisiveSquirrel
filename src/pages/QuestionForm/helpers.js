import { recipes } from '../../data/recipes'

// const usersReplies = {
//     activity: 'Medium',
//     isLowCost: false,
//     type: 'Vege',
// }

export const showSelectedRecepy = (usersReplies) => {
    const recepyArray = Object.values(recipes)

    const filteredRecepies = recepyArray
        .filter((recepy) => recepy.activity === usersReplies.activity)
        .filter((recepy) => recepy.isLowCost === usersReplies.isLowCost)
        .filter((recepy) => recepy.type === usersReplies.type)

    const filteredRecepy = filteredRecepies[Math.floor(Math.random() * filteredRecepies.length)]

    return filteredRecepy
}

// {
//     activity: 'Medium'
//     id: 'rajcatovaVejceZPanve'
//     isLowCost: false
//     title: 'Rajčatová vejce z pánve'
//     type: 'Vege'
// }
