import { createStore } from "redux";
// import counterReducer from "../reducers/counter";
import foodReducer from "../reducers/Food";

const store=createStore(foodReducer);

export default store;