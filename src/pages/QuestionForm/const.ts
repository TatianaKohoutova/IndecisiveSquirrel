import { Calories, Taste, Spicy, Type, ActivityType, Difficulty } from '../../const'

export const questions = [
    {
        id: 'taste',
        title: 'Jaká je tvoje preferovaná chuť?',
        options: [
            { description: 'Sladká', img: '/img/ikons-questions/sweet_salty/Sweet.png', value: Taste.Sweet },
            { description: 'Slaná', img: '/img/ikons-questions/sweet_salty/Salty.png', value: Taste.Salty },
            //         // {description:'Kyselá', img:'', value: Taste.Sour}
        ],
    },
    {
        id: 'calories',
        title: 'Jak moc chceš dnes hřešit?',
        options: [
            { description: 'Vůbec. Chci něco zdravého.', img: '', value: Calories.Low },
            { description: 'Něco mezi.', img: '', value: Calories.Medium },
            { description: 'Dneska potřebuju prasárničku.', img: '', value: Calories.High },
        ],
    },
    //     id: 'spacy',
    //     title: 'Jak pálivé jídlo chceš?',
    //     options: [
    //         { description: 'Chci nepálivé.', img: '', value: '' },
    //         { description: 'Chci jemně pálivé.', img: '', value: '' },
    //         { description: 'Středně pálivé.', img: '', value: '' },
    //         { description: 'Miluju pálivé.', img: '', value: '' },
    //     ],
    // },
    {
        id: 'type',
        title: 'Jak typ jídla by ti pro dnešek vyhovoval?',
        options: [
            // { description: 'Veganské', img: '', value: Type.Vegan },
            { description: 'Vegetariánské', img: '', value: Type.Vegetarian },
            { description: 'Masové', img: '', value: Type.Meat },
        ],
    },
    {
        // id: 'activity',
        // title: 'Jak jsi byl dneska aktivní?',
        // options: [
        //     { description: 'Aktivní', img: '', value: ActivityType.Active },
        //     { description: 'Středně', img: '', value: ActivityType.Medium },
        //     { description: 'Pasivní', img: '', value: ActivityType.Passive },
        // ],
    },

    //     id: 'difficulty',
    //     title: 'Jakou náročnost receptu by jsi dneska preferoval?',
    //     options: [
    //         { description: 'Lehkou', img: '', value: '' },
    //         { description: 'Střední', img: '', value: '' },
    //         { description: 'Nebráním se něčemu náročnějšímu', img: '', value: '' },
    //     ],
    // },

    //     id: 'time',
    //     title: 'Kolik máš času na vaření',
    //     options: [
    //         { description: 'Nemám moc času', img: '', value: '' },
    //         { description: 'Jsem flexibilní', img: '', value: '' },
    //     ],
    // },
    {
        id: 'isLowCost',
        title: 'Chceš utrácet?',
        options: [
            { description: 'Chci něco úsporného', img: '', value: true },
            { description: 'Klidně si nějaké ingredience dokoupím', img: '', value: false },
        ],
    },
]
