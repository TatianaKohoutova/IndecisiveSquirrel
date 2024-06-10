import { recipes } from '../../data/recipes'

// const usersReplies =
//   {taste: 'Salty', calories: 'Low', type: 'Vege', isLowCost: false}

// calories: "Medium"
// id: "rajcatovaVejceZPanve"
// isLowCost: false
// "Salty"
// type:"Vege"

export const showSelectedRecepy = (usersReplies) => {
    const recepyArray = Object.values(recipes)

    let filteredRecepies = []

    filteredRecepies = recepyArray
        .filter((recepy) => recepy.type === usersReplies.type)
        .filter((recepy) => recepy.taste === usersReplies.taste)
        .filter((recepy) => recepy.calories === usersReplies.calories)
        .filter((recepy) => recepy.isLowCost === usersReplies.isLowCost)

    if (filteredRecepies.length === 0) {
        filteredRecepies = recepyArray
            .filter((recepy) => recepy.type === usersReplies.type)
            .filter((recepy) => recepy.taste === usersReplies.taste)
            .filter((recepy) => recepy.calories === usersReplies.calories)
    }

    if (filteredRecepies.length === 0) {
        filteredRecepies = recepyArray
            .filter((recepy) => recepy.type === usersReplies.type)
            .filter((recepy) => recepy.taste === usersReplies.taste)
    }

    if (filteredRecepies.length === 0) {
        filteredRecepies = recepyArray.filter((recepy) => String(recepy.type) === String(usersReplies.type))
    }

    const filteredRecepy = filteredRecepies[Math.floor(Math.random() * filteredRecepies.length)]

    console.log(recepyArray)
    console.log('pocet receptu co se vyfiltrovalo ' + filteredRecepies.length)
    console.log('vybrany recept: ' + filteredRecepy)

    // console.log(filteredRecepy)

    return filteredRecepy
}

// {taste: 'Sweet', calories: 'Medium', type: 'Meat', isLowCost: false}

// {
//     activity: 'Medium'
//     id: 'rajcatovaVejceZPanve'
//     isLowCost: false
//     title: 'Rajčatová vejce z pánve'
//     type: 'Vege'
// }
