import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, HIDE_MODEL, REMOVE_ITEM } from "../../../Actions/Food";
import CartItem from "./CartItem";
const Cart = (props) => {
  const dispatch=useDispatch();
  const CartItemsAddedToCart=useSelector(state=>state.cartItems);
  const totalCost=`Rs ${useSelector(state=>state.totalCost)}`

  const cartItemAddHandler = item => {
    dispatch({type:ADD_ITEM,cartItem:{...item,amount:1}})
  }

  const cartItemRemoveHandler = id => {
    dispatch({type:REMOVE_ITEM,cartItemId:id})
}

  const hasCartItems = CartItemsAddedToCart.length > 0;
  
  const cartItems = (
    <ul className={classes['cart-items']}>
      {CartItemsAddedToCart.map((item) => (
        <CartItem
          key={item.id} 
          name={item.name} 
          amount={item.amount} 
          price={item.price} 
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemoveItem={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  const hideCartModel=()=>{
    dispatch({type:HIDE_MODEL});
  }

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalCost}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={hideCartModel}>Close</button>
        {hasCartItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;