import { addItem, totalCartItems } from "../Actions/Food";

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
        totalCartItems: state.totalCartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (cartItem) => dispatch({type:addItem,cartItem:cartItem}),
        totalCartItems: (cartItemQty) => dispatch({type:totalCartItems,cartItemQty:cartItemQty}),
    }
}

