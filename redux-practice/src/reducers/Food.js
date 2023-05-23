import { ADD_ITEM, TOTAL_CART_ITEMS, SHOW_MODEL, HIDE_MODEL, TOTAL_COST, REMOVE_ITEM } from "../Actions/Food";

const initialState = {
    cartItems: [],
    totalCartItems: 0,
    showCartModel: false,
    totalCost: 0,
}

const foodReducer = (state = initialState, action) => {
    if (action.type === ADD_ITEM) {
        console.log("Hello");
        const updatedTotalCost = state.totalCost + action.cartItem.price * action.cartItem.amount;

        const existingCartItemIndex = state.cartItems.findIndex(
            (item) => {
                console.log("item====", item);
                return item.id === action.cartItem.id
            }
        );

        const existingCartItem = state.cartItems[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.cartItem.amount
            }
            updatedItems = [...state.cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.cartItems.concat(action.cartItem)
        }

        return {
            ...state,
            cartItems: updatedItems,
            totalCost: updatedTotalCost
        }
        // return { ...state, cartItems: [...state.cartItems, action.cartItem] };
    }
    if (action.type === REMOVE_ITEM) {
        const existingCartItemIndex = state.cartItems.findIndex(
            (item) => item.id === action.cartItemId
        );
        const existingItem = state.cartItems[existingCartItemIndex];
        const updatedTotalAmount = state.totalCost - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.cartItems.filter(item => item.id !== action.cartItemId)
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.cartItems];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            cartItems: updatedItems,
            totalCost: updatedTotalAmount
        }
    }
    if (action.type === TOTAL_CART_ITEMS) {
        console.log(action.cartItemQty);
        return { ...state, totalCartItems: state.totalCartItems + action.cartItemQty };
    }
    if (action.type === SHOW_MODEL) {
        return { ...state, showCartModel: true }
    }
    if (action.type === HIDE_MODEL) {
        return { ...state, showCartModel: false }
    }
    if (action.type === TOTAL_COST) {
        return { ...state, totalCost: state.totalCost + action.cost };
    }
    return state;
}

export default foodReducer;