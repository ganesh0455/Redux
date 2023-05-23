import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import { useDispatch } from "react-redux";
import { useRef, useState } from 'react';
import { TOTAL_CART_ITEMS } from '../../../../Actions/Food';

const MealItemForm = (props) => {
    const [amountIsValid,setAmountIsValid]=useState(true);
    const amountInputRef=useRef();

    const dispatch = useDispatch();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        console.log("Entered: " , enteredAmount);
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber > 5){
            setAmountIsValid(false)
            return
        }
        dispatch({type:TOTAL_CART_ITEMS,cartItemQty:enteredAmountNumber})
        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Quantity'
                input={{
                    id: 'qty_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default MealItemForm;