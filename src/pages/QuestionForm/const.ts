import {
    Calories,
    CaloriesScale,
    Taste,
    TasteMap,
    Spicy,
    SpicyScale,
    Type,
    TypeMap,
    ActivityType,
    ActivityTypeTreshold,
    Difficulty,
    DifficultyMap,
} from '../../const'

export const questions = [
    //     id: 'taste',
    //     title: 'Jaká je tvoje preferovaná chuť?',
    //     options: [
    //         { description: 'Sladká', img: '', value: '' },
    //         { description: 'Slaná', img: '', value: '' },
    //         // {description:'Kyselá', img:'',}
    //     ],

    //     id: 'calories',
    //     title: 'Jak moc chceš dnes hřešit?',
    //     options: [
    //         { description: 'Vůbec. Chci něco zdravého.', img: '', value: '' },
    //         { description: 'Něco mezi.', img: '', value: '' },
    //         { description: 'Dneska potřebuju prasárničku.', img: '', value: '' },
    //     ],

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
            { description: 'Veganské', img: '', value: Type.Vegan },
            { description: 'Vegetariánské', img: '', value: Type.Vegetarian },
            { description: 'Masové', img: '', value: Type.Meat },
        ],
    },
    {
        id: 'activity',
        title: 'Jak jsi byl dneska aktivní?',
        options: [
            { description: 'Aktivní', img: '', value: ActivityType.Active },
            { description: 'Středně', img: '', value: ActivityType.Medium },
            { description: 'Pasivní', img: '', value: ActivityType.Passive },
        ],
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
