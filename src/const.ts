export enum Units {
    Kg = 'Kg',
    L = 'L',
    Ml = 'Ml',
    G = 'G',
    TableSpoon = 'TableSpoon',
    TeaSpoon = 'TeaSpoon',
    Piece = 'Piece',
    Handful = 'Handful',
    Pinch = 'Pinch',
}

export const UnitsMap = {
    [Units.Kg]: 'kg',
    [Units.L]: 'l',
    [Units.Ml]: 'ml',
    [Units.G]: 'g',
    [Units.TableSpoon]: 'lžíce',
    [Units.TeaSpoon]: 'lžičky',
    [Units.Piece]: 'ks',
    [Units.Handful]: 'hrst',
    [Units.Pinch]: 'špetka',
}

export enum Calories {
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
}

export const CaloriesScale = {
    [Calories.Low]: {
        max: 299,
    },
    [Calories.Medium]: {
        min: 300,
        max: 599,
    },
    [Calories.High]: {
        min: 600,
    },
}

export enum Taste {
    Sweet = 'Sweet',
    Salty = 'Salty',
    Sour = 'Sour',
}
export const TasteMap = {
    [Taste.Sweet]: 'Sladké',
    [Taste.Salty]: 'Slané',
    [Taste.Sour]: 'Kyselé',
}

export enum Spicy {
    NonSpicy = 'Non-spice',
    Low = 'Low',
    Medium = 'Medium',
    High = 'High',
}

export const SpicyScale = {
    [Spicy.NonSpicy]: 'Nepálivé',
    [Spicy.Low]: 'Lehce pálivé',
    [Spicy.Medium]: 'Středně pálivé',
    [Spicy.High]: 'Pikantní',
}

export enum Type {
    Vegan = 'Vegan',
    Vegetarian = 'Vege',
    Meat = 'Meat',
}

export const TypeMap = {
    [Type.Vegan]: 'Veganské',
    [Type.Vegetarian]: 'Vegetariánské',
    [Type.Meat]: 'Masové',
}

export enum Cost {
    Low = 'Low',
    Hight = 'Hight',
}

export const CostMap = {
    [Cost.Low]: 'Veganské',
    [Cost.Hight]: 'Hight',
}

export const ActivityType = {
    Passive: 'Passive',
    Medium: 'Medium',
    Active: 'Activ',
}

// ActivityTypeTreshold as Calories number
export const ActivityTypeTreshold = {
    [ActivityType.Passive]: {
        max: 299,
    },
    [ActivityType.Medium]: {
        min: 300,
        max: 599,
    },
    [ActivityType.Active]: {
        min: 600,
    },
}

export const Difficulty = {
    Easy: 'Easy',
    Medium: 'Medium',
    Hard: 'Hard',
}

export const DifficultyMap = {
    [Difficulty.Easy]: 'Snadné',
    [Difficulty.Medium]: 'Středně náročné',
    [Difficulty.Hard]: 'Náročné',
}
