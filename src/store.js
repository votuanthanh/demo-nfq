import { createStore } from "redux";
import reducer from "./reducers";

// Creates the store received from the reducer(s)
let store = createStore(reducer);

export default store;