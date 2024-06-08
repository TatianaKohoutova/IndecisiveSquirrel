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

export const questions = {
    questionTaste: {
        id: 'questionTaste',
        title: 'Jaká je tvoje preferovaná chuť?',
        options: [
            { name: 'Sladká', img: '', value: '' },
            { name: 'Slaná', img: '', value: '' },
            // {name:'Kyselá', img:'',}
        ],
    },
    questionCalories: {
        id: 'questionCalories',
        title: 'Jak moc chceš dnes hřešit?',
        options: [
            { name: 'Vůbec. Chci něco zdravého.', img: '', value: '' },
            { name: 'Něco mezi.', img: '', value: '' },
            { name: 'Dneska potřebuju prasárničku.', img: '', value: '' },
        ],
    },
    questionSpicy: {
        id: 'questionSpacy',
        title: 'Jak pálivé jídlo chceš?',
        options: [
            { name: 'Chci nepálivé.', img: '', value: '' },
            { name: 'Chci jemně pálivé.', img: '', value: '' },
            { name: 'Středně pálivé.', img: '', value: '' },
            { name: 'Miluju pálivé.', img: '', value: '' },
        ],
    },
    questionType: {
      id: 'questionType',
      title: 'Jak  typ jídla by ti pro dnešek vyhovoval?',
      options: [
          { name: 'Veganské', img: '', value: '' },
          { name: 'Vegeta', img: '', value: '' },
          { name: 'Středně pálivé.', img: '', value: '' },
          { name: 'Miluju pálivé.', img: '', value: '' },
      ],
  },
}
