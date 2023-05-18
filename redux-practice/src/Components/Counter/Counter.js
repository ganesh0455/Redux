import classes from './Counter.module.css';
import { Component } from 'react';
import { connect } from "react-redux";

class ClassCounter extends Component {

    // const dispatch = useDispatch();
    // const counter=useSelector(state=>state.counter);

    toggleCounterHandler = () => {};

    incrementHandler = () => {
        this.props.increment();
    };
    decrementHandler() {
        this.props.decrement();
    };

    render(){
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
};

const mapStateToProps = (state) =>{
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment : () => dispatch({type:"INCREMENT"}),
        decrement : () => dispatch({type:"DECREMENT"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);