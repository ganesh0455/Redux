import { INCREMENT, INCREMENT_BY_5, DECREMENT, TOGGLE_COUNTER_DISPLAY } from "../Actions/Counter"

const initialState = {
    counter: 0,
    showCounter: true,
}

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {

        // state.counter++;
        // return state;    Don't do thease 2 steps(line 9,10) because we should not mutate state directly.
        return { ...state, counter: state.counter + 1 }
    }

    if (action.type === INCREMENT_BY_5) {
        return { ...state, counter: state.counter + action.amount }
    }

    if (action.type === DECREMENT) {
        return { ...state, counter: state.counter - 1 }
    }

    if (action.type === TOGGLE_COUNTER_DISPLAY) {
        return { ...state, showCounter: !state.showCounter }
    }
    return state;
}

export default counterReducer;