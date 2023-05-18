import { DECREMENT, INCREMENT, INCREMENT_BY_5, TOGGLE_COUNTER_DISPLAY } from '../../Actions/Counter';
import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const showCounter = useSelector(state => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: INCREMENT, })
    };

    const incrementHandlerWith5 = () => {
        dispatch({ type: INCREMENT_BY_5, amount: 5 })
    }

    const decrementHandler = () => {
        dispatch({ type: DECREMENT },)
    };

    const toggleCounterHandler = () => {
        dispatch({ type: TOGGLE_COUNTER_DISPLAY });
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={incrementHandlerWith5}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;