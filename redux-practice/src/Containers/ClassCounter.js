import { connect } from "react-redux";
import ClassCounterContainer from '../Components/ClassBasedCounter/ClassCounter';
import { DECREMENT, INCREMENT, INCREMENT_BY_5, TOGGLE_COUNTER_DISPLAY } from "../Actions/Counter";

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        showCounter: state.showCounter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: INCREMENT }),
        decrement: () => dispatch({ type: DECREMENT }),
        incrementBy5: () => dispatch({ type: INCREMENT_BY_5, amount: 5 }),
        toggleCounterDisplay: () => dispatch({ type: TOGGLE_COUNTER_DISPLAY }),
    }
}


// export default connect(mapStateToProps, mapDispatchToProps)(ClassCounterContainer);
export let connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(ClassCounterContainer);