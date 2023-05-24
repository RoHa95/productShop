import React,{useReducer, createContext} from 'react';
//create context
export const cartContext = createContext();

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total: 0,
    checkOut: false
}
const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity , 0)
    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemsCounter, total}
}
const cartReducer = (state, action) =>{
    switch (action.type){
        case "ADD_ITEM" :
            if(!state.selectedItems.find( item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,quantity: 1
                })
            }
            return {
                ...state, selectedItems : [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkOut: false
            }
        case "REMOVE_ITEM" :
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return { ...state, selectedItems: newSelectedItems,
                ...sumItems(newSelectedItems)}
        case "INCREASE" :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE" :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT" :
            return{
                selectedItems : [],
                itemsCounter : 0,
                total: 0,
                checkOut: true
            }
        case "CLEAR" :
            return{
                selectedItems : [],
                itemsCounter : 0,
                total: 0,
                checkOut: 0
            }
        default:
            return state;
    }
}
const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <cartContext.Provider value={{state , dispatch}}>
            {props.children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;