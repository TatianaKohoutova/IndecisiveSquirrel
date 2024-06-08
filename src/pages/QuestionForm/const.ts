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
    //     id: 'questionTaste',
    //     title: 'Jaká je tvoje preferovaná chuť?',
    //     options: [
    //         { description: 'Sladká', img: '', value: '' },
    //         { description: 'Slaná', img: '', value: '' },
    //         // {description:'Kyselá', img:'',}
    //     ],

    //     id: 'questionCalories',
    //     title: 'Jak moc chceš dnes hřešit?',
    //     options: [
    //         { description: 'Vůbec. Chci něco zdravého.', img: '', value: '' },
    //         { description: 'Něco mezi.', img: '', value: '' },
    //         { description: 'Dneska potřebuju prasárničku.', img: '', value: '' },
    //     ],

    //     id: 'questionSpacy',
    //     title: 'Jak pálivé jídlo chceš?',
    //     options: [
    //         { description: 'Chci nepálivé.', img: '', value: '' },
    //         { description: 'Chci jemně pálivé.', img: '', value: '' },
    //         { description: 'Středně pálivé.', img: '', value: '' },
    //         { description: 'Miluju pálivé.', img: '', value: '' },
    //     ],
    // },
    {
        id: 'questionType',
        title: 'Jak typ jídla by ti pro dnešek vyhovoval?',
        options: [
            { description: 'Veganské', img: '', value: '' },
            { description: 'Vegetariánské', img: '', value: '' },
            { description: 'Masové', img: '', value: '' },
        ],
    },
    {
        id: 'questionActivity',
        title: 'Jak jsi byl dneska aktivní?',
        options: [
            { description: 'Aktivní', img: '', value: '' },
            { description: 'Středně', img: '', value: '' },
            { description: 'Pasivní', img: '', value: '' },
        ],
    },

    //     id: 'questionDifficulty',
    //     title: 'Jakou náročnost receptu by jsi dneska preferoval?',
    //     options: [
    //         { description: 'Lehkou', img: '', value: '' },
    //         { description: 'Střední', img: '', value: '' },
    //         { description: 'Nebráním se něčemu náročnějšímu', img: '', value: '' },
    //     ],
    // },

    //     id: 'questionTime',
    //     title: 'Kolik máš času na vaření',
    //     options: [
    //         { description: 'Nemám moc času', img: '', value: '' },
    //         { description: 'Jsem flexibilní', img: '', value: '' },
    //     ],
    // },
    {
        id: 'questionMoney',
        title: 'Chceš utrácet?',
        options: [
            { description: 'Chci něco úsporného', img: '', value: '' },
            { description: 'Klidně si nějaké ingredience dokoupím', img: '', value: '' },
        ],
    },
]
