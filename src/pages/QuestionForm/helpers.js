import { recipes } from '../../data/recipes'

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
        filteredRecepies = recepyArray.filter((recepy) => recepy.type === usersReplies.type)
    }

    const filteredRecepy = filteredRecepies[Math.floor(Math.random() * filteredRecepies.length)]

    return filteredRecepy
}
