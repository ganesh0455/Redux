import { SHOW_MODEL } from '../../../Actions/Food';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted,setIsButtonIsHighlighted]=useState(false)
  const cartItems=useSelector(state=>state.cartItems);
  const dispatch=useDispatch();

  const showCartModel=()=>{
    dispatch({type:SHOW_MODEL})
  }

  const numberOfCartItems=cartItems.reduce((currentNumber,item)=>{
    return currentNumber+item.amount
  },0);

  const buttonClasses=`${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(cartItems.length===0){
        return;
    }
    const timerId=setTimeout(()=>{
        setIsButtonIsHighlighted(false);
    },200)
    setIsButtonIsHighlighted(true);

    return ()=>{
        clearTimeout(timerId)
    }

},[cartItems])

  return (
    <button className={buttonClasses} onClick={showCartModel}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;