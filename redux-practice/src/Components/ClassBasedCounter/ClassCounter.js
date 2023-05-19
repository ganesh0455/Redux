import classes from './ClassCounter.module.css';
import { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.incrementHandler=this.incrementHandler.bind(this);
        this.incrementBy5Handler=this.incrementBy5Handler.bind(this);
        this.decrementHandler=this.decrementHandler.bind(this);
        this.toggleCounterHandler=this.toggleCounterHandler.bind(this);

    }
    incrementHandler = () => {
        this.props.increment();
    };

    decrementHandler() {
        this.props.decrement();
    };

    toggleCounterHandler = () => {
        this.props.toggleCounterDisplay();
    };

    incrementBy5Handler() {
        this.props.incrementBy5();
    }

    render() {
        console.log(this.props)
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                {this.props.showCounter && <div className={classes.value}>{this.props.counter}</div>}
                <div>
                    <button onClick={this.incrementHandler}>Increment</button>
                    <button onClick={this.incrementBy5Handler}>increment By 5</button>
                    <button onClick={this.decrementHandler}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
};



export default ClassCounter;