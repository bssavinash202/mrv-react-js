

const {createStore} = require('redux');
const initialState ={
    cakes:10,
    milkShake:5,
    ingredients:{
        flour:100,
        sugar:50,
        eggs:200,
        milk:100
    }
};
const BAKE_CAKE = 'BAKE-CAKE';
const RESTOCK_INGREDIENTS='RESTOCK_INGREDIENTS';
const MILK_SHAKE = 'MILK_SHAKE';
const bakeCake = (quantity) =>({
    type:BAKE_CAKE,
    quantity,
});
const restockIngredients = (ingredients) =>({
    type: RESTOCK_INGREDIENTS,
    ingredients,
});
const shake = (litres)=>({
    type: MILK_SHAKE,
    litres,
})
const bakeryReducer = (state = initialState, action)=>{
    switch(action.type){
        case BAKE_CAKE:
            return{
                ...state,
                cakes: state.cakes + action.quantity,
                ingredients:{
                    ...state.ingredients,
                    flour: state.ingredients.flour-2*action.quantity,
                    sugar: state.ingredients.sugar-1*action.quantity,
                    eggs: state.ingredients.eggs-1*action.quantity,
                },
            };
        case RESTOCK_INGREDIENTS:
            return {
                ...state,
                ingredients:{
                    flour: state.ingredients.flour + (action.ingredients.flour || 0),
                    sugar: state.ingredients.sugar + (action.ingredients.sugar || 0),
                    eggs: state.ingredients.eggs + (action.ingredients.eggs || 0),
                    milk: state.ingredients.milk + (action.ingredients.milk || 0),
                },
            };
        case MILK_SHAKE:
            return {
                ...state,
                milkShake: state.milkShake + action.litres,
                ingredients:{
                    ...state.ingredients,
                    sugar: state.ingredients.sugar -2*action.litres,
                    milk: state.ingredients.milk -1*action.litres,
                },
                };
            default:
                return state;
    }
};
const store = createStore(bakeryReducer);
store.subscribe(()=>console.log(store.getState()));
console.log('Baking the Cake')
store.dispatch(bakeCake(5));
console.log('Making the Milk Shake')
store.dispatch(shake(3));
console.log('Restocking the Ingredients');
store.dispatch(restockIngredients({flour:50, sugar:20,eggs:50, milk:20}));