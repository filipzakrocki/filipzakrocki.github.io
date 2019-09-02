import * as actionTypes from './actions';

const initialState = {
    ingredients: {
       salad: 0,
       bacon: 0,
       egg: 0,
       cheese: 0,
       meat: 0
    },
    totalPrice: 4,
    totalKcal: 120,
    purchasable: false
}

const INGREDIENT_PRICES = {
    egg: 0.6,
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.7,
    meat: 1.3,
}

const INGREDIENT_KCAL = {
    egg: 90,
    salad: 5,
    cheese: 85,
    bacon: 144,
    meat: 195,
}

const reducer = (state = initialState, action) => {



    switch (action.type) {
        case (actionTypes.ADD_INGREDIENT):


            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                   [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                totalKcal: state.totalKcal + INGREDIENT_KCAL[action.ingredientName],
                purchasable: initialState.totalPrice !== state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case (actionTypes.REMOVE_INGREDIENT):
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                       [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                    totalKcal: state.totalKcal - INGREDIENT_KCAL[action.ingredientName],
                    purchasable: initialState.totalPrice !== state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                }
        default:
            return state;    
    }
};




export default reducer;