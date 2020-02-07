// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import nasaList from "./nasaList";

export default combineReducers({ nasaList });