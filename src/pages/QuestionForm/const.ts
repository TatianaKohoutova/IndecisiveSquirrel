import { Calories, Taste, Spicy, Type, ActivityType, Difficulty, Cost } from '../../const'

export const questions = [
    {
        id: 'type',
        title: 'Jak typ jídla by ti pro dnešek vyhovoval?',
        options: [
            // { description: 'Veganské', img: '', value: Type.Vegan },
            { description: 'Vegetariánské', img: '/img/ikons-questions/type/Vege.png', value: Type.Vegetarian },
            { description: 'Masové', img: '/img/ikons-questions/type/Meat.png', value: Type.Meat },
        ],
    },
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
            {
                description: 'Vůbec. Chci něco zdravého',
                img: '/img/ikons-questions/healthy_unhealthy/Healthy.png',
                value: Calories.Low,
            },
            {
                description: 'Něco mezi',
                img: '/img/ikons-questions/healthy_unhealthy/Medium.png',
                value: Calories.Medium,
            },
            {
                description: 'Dneska potřebuju prasárničku',
                img: '/img/ikons-questions/healthy_unhealthy/Unhealthy.png',
                value: Calories.High,
            },
        ],
    },
    {
        id: 'isLowCost',
        title: 'Chceš utrácet?',
        options: [
            {
                description: 'Chci něco úsporného',
                img: '/img/ikons-questions/spending_money/Safe.png',
                value: Cost.Low,
            },
            {
                description: 'Klidně si nějaké ingredience dokoupím',
                img: '/img/ikons-questions/spending_money/Spend.png',
                value: Cost.Hight,
            },
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
    //{
    // id: 'activity',
    // title: 'Jak jsi byl dneska aktivní?',
    // options: [
    //     { description: 'Aktivní', img: '', value: ActivityType.Active },
    //     { description: 'Středně', img: '', value: ActivityType.Medium },
    //     { description: 'Pasivní', img: '', value: ActivityType.Passive },
    // ],
    //},

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
]
