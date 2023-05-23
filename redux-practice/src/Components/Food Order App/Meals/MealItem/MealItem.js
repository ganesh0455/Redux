import { useDispatch } from 'react-redux';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { ADD_ITEM } from '../../../../Actions/Food';

const MealItem = (props) => {
  // const price = `$${props.price.toFixed(2)}`;
  const price = `RS ${props.price}`;
  const dispatch = useDispatch();

  const addToCartHandler = (quantity) => {
    dispatch({
      type: ADD_ITEM, cartItem: {
        id: props.id,
        name: props.name,
        amount: quantity,
        price: props.price
      }
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} on/>
      </div>
    </li>
  );
};

export default MealItem;